import Link from 'next/link'

import Button from '@/components/Button'

import * as S from './styles'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { api } from '@/services/api'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

type PaymentFormProps = {
  onCancel: () => void
  propertyId: string
  checkIn: Date
  checkout: Date
}

function PaymentForm({
  onCancel,
  propertyId,
  checkIn,
  checkout
}: PaymentFormProps) {
  const [error, setError] = useState<string | null>(null)
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isStripeLoading, setIsStripeLoading] = useState(true)

  useEffect(() => {
    if (elements) {
      const element = elements.getElement('payment')
      element?.on('ready', () => {
        setIsStripeLoading(false)
      })
    }
  }, [elements])

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setIsSubmitting(true)

    if (!stripe || !elements) {
      return
    }

    const payload = await stripe.confirmPayment({
      elements,
      redirect: 'if_required'
    })

    if (payload.error) {
      setError(String(payload.error.message))
    } else {
      setError(null)

      const { id, amount, status } = payload.paymentIntent

      await api({
        method: 'POST',
        endpoint: '/rentals',
        body: {
          check_in: checkIn,
          checkout,
          property_id: propertyId,
          payment_intent_id: id,
          status,
          amount: amount
        }
      })

      setIsSubmitting(false)

      await router.push(`/success?id=${id}`)
    }
  }

  return (
    <S.Wrapper>
      <h2>Pagamento</h2>
      <form onSubmit={handleSubmit}>
        {/* {isStripeLoading && (
          <S.SpinnerWrapper>
            <div className="loader" />
          </S.SpinnerWrapper>
        )} */}

        <PaymentElement />

        {error && <S.Error>{error} Tente novamente.</S.Error>}

        <S.ButtonContainer>
          <button className="cancel-button" onClick={onCancel}>
            Cancelar
          </button>
          <Button
            type="submit"
            size="medium"
            isSubmitting={isSubmitting}
            disabled={!stripe || !elements || isSubmitting}
          >
            Pagar
          </Button>
        </S.ButtonContainer>
      </form>
    </S.Wrapper>
  )
}

export default PaymentForm
