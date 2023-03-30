import { Fragment, useEffect, useMemo, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useQuery } from '@tanstack/react-query'
import { DatePickerInput } from '@mantine/dates'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'

import { useAuth } from '@/context/auth-context'
import { api } from '@/services/api'
import { priceFormatter } from '@/utils/formatter'
import { calculateDifferenceBetweenDates, getDaysArray } from '@/utils/date'

import ToastMessage from '../ToastMessage'
import PaymentForm from './PaymentForm'
import Button from '../Button'

import * as S from './styles'

const stripe = loadStripe(
  String(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
)

type CheckoutProps = {
  daily_price: number
  property_id: string
}

function Checkout({ daily_price, property_id }: CheckoutProps) {
  const { isAuthenticated } = useAuth()
  const [step, setStep] = useState<'select' | 'info' | 'payment'>('select')
  const [days, setDays] = useState(0)
  const [clientSecret, setClientSecret] = useState('')
  const [loading, setLoading] = useState(false)
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null])

  useEffect(() => {
    async function getPaymentIntent() {
      setLoading(true)
      const [check_in, checkout] = value
      const { paymentIntent } = await api({
        endpoint: '/rentals/create-payment-intent',
        method: 'POST',
        body: {
          check_in,
          checkout,
          property_id
        }
      })

      if (paymentIntent.error) {
        toast.error(
          <ToastMessage
            title="Ocorreu um erro."
            description={paymentIntent.error}
          />
        )
        setLoading(false)
      } else {
        setLoading(false)
        setClientSecret(paymentIntent.client_secret)
      }
    }

    if (step === 'payment') {
      getPaymentIntent()
    }
  }, [property_id, step, value])

  const { data: rentals } = useQuery(
    [`rentals/${property_id}`, property_id],
    async () => {
      const { rentals } = await api({
        endpoint: `/rentals?property=${property_id}`,
        method: 'GET'
      })

      return rentals
    },
    {
      staleTime: 1000 * 60 * 10,
      enabled: !!property_id
    }
  )

  function handleChooseDate() {
    const [check_in, checkout] = value
    const daysBetweenValues = getDaysArray(check_in as Date, checkout as Date)

    if (!check_in || !checkout) {
      return toast.error(
        <ToastMessage
          title="Ocorreu um erro."
          description="Você precisa escolher as datas para prosseguir."
        />
      )
    }

    const dataIsNotAvailable =
      notAvailableDates.filter((date: number) =>
        daysBetweenValues.includes(date)
      ).length > 0

    if (dayjs(checkout).isBefore(dayjs(check_in))) {
      return toast.error(
        <ToastMessage
          title="Ocorreu um erro."
          description="Você não pode fazer o checkout antes do check-in."
        />
      )
    }

    if (dataIsNotAvailable) {
      toast.error(
        <ToastMessage
          title="Ocorreu um erro."
          description="Essa data não está disponível."
        />
      )
      return
    }

    const betweenDays = calculateDifferenceBetweenDates(
      check_in as Date,
      checkout as Date
    )

    setStep('info')
    setDays(betweenDays)
  }

  const notAvailableDates = useMemo<number[]>(() => {
    const rentalsFormatted = rentals?.map((rental: any) => {
      return getDaysArray(rental.check_in, rental.checkout)
    })

    const mergedArrays = [].concat.apply([], rentalsFormatted)

    return mergedArrays
  }, [rentals])

  return (
    <S.Wrapper>
      {step === 'payment' && value[0] && value[1] ? (
        <Fragment>
          {/* {loading && <div className="spinner" />} */}
          {clientSecret && (
            <Elements
              key={clientSecret}
              stripe={stripe}
              options={{ clientSecret }}
            >
              <PaymentForm
                propertyId={property_id}
                checkIn={value[0]}
                checkout={value[1]}
                onCancel={() => setStep('select')}
              />
            </Elements>
          )}
        </Fragment>
      ) : (
        <>
          <h4>
            {priceFormatter.format(daily_price)} <span>/ noite</span>
          </h4>

          <S.InputContainer>
            <DatePickerInput
              type="range"
              value={value}
              valueFormat="D[ de ]MMMM"
              onChange={setValue}
              locale="pt-br"
              size="xl"
              placeholder="Selecione as data de check-in e checkout"
              clearable
              minDate={dayjs(new Date()).add(1, 'day').toDate()}
              excludeDate={date => {
                date.setHours(0, 0, 0, 0)
                const today = new Date()
                today.setHours(0, 0, 0, 0)
                return (
                  date.toISOString() === today.toISOString() ||
                  notAvailableDates.includes(date.getTime())
                )
              }}
            />
          </S.InputContainer>

          {step === 'select' && (
            <Button
              type="button"
              className="button"
              variant="primary"
              size="small"
              disabled={!isAuthenticated}
              onClick={handleChooseDate}
            >
              Próximo passo
            </Button>
          )}

          {step === 'info' && (
            <S.Values>
              <S.Value>
                <span>
                  {priceFormatter.format(daily_price)} * {days} dias
                </span>
                <span>{priceFormatter.format(days * daily_price)}</span>
              </S.Value>
              <S.Value>
                <span>Taxa de serviço</span>
                <span>R$ 17</span>
              </S.Value>
              <S.HorizontalLine />
              <S.Value>
                <span>Total</span>
                <span>{priceFormatter.format(days * daily_price + 17)}</span>
              </S.Value>

              <Button
                className="button"
                type="button"
                variant="primary"
                size="small"
                onClick={() => setStep('payment')}
              >
                Pagar
              </Button>
            </S.Values>
          )}
        </>
      )}
    </S.Wrapper>
  )
}

export default Checkout
