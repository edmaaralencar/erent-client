import { ReactElement } from 'react'
import Image from 'next/image'
import dayjs from 'dayjs'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { useQuery } from '@tanstack/react-query'

import { api } from '@/services/api'
import { getUserRentalsSchema } from '@/schemas/rentals-schema'
import { withSSRAuth } from '@/utils/with-ssr-auth'
import { priceFormatter } from '@/utils/formatter'

import AccountWrapper from '@/components/AccountWrapper'
import AppWrapper from '@/components/AppWrapper'
import Button from '@/components/Button'
import Link from 'next/link'

import * as S from './styles'

export default function Rentals() {
  const { data } = useQuery(
    ['rentals/me'],
    async () => {
      const response = await api({
        method: 'GET',
        endpoint: '/rentals/me'
      })

      const rentals = getUserRentalsSchema.parse(response.rentals)

      return rentals
    },
    {
      staleTime: 1000 * 60 * 5
    }
  )

  return (
    <AccountWrapper title="Meus aluguéis">
      <S.Wrapper>
        {data?.map(rental => (
          <S.Rental key={rental.id}>
            <S.RentalImage>
              <Image
                src={
                  rental?.property?.image_url
                    ? rental?.property?.image_url
                    : '/avatar.png'
                }
                alt={rental.property.name}
                fill
              />
            </S.RentalImage>
            <S.RentalContainer>
              <S.RentalDetails>
                <S.RentalInfo>
                  <div>
                    <S.Small>RIO DE JANEIRO, BRASIL</S.Small>
                    <p>{rental.property.name}</p>
                  </div>
                  <div>
                    <S.Small>TOTAL</S.Small>
                    <p>{priceFormatter.format(rental.total / 100)}</p>
                  </div>
                </S.RentalInfo>
                <S.RentalDates>
                  <S.Small className="align">Período de aluguel</S.Small>
                  <div>
                    <span>
                      {dayjs(rental.checkIn).format('DD[/]MM[/]YYYY')}
                    </span>
                    <AiOutlineArrowDown size={24} color="#18191F" />
                    <span>
                      {dayjs(rental.checkout).format('DD[/]MM[/]YYYY')}
                    </span>
                  </div>
                </S.RentalDates>
              </S.RentalDetails>
              <Link href={`/review/${rental.property.id}`} passHref legacyBehavior>
                <Button as="a">
                  Avaliar
                </Button>
              </Link>
            </S.RentalContainer>
          </S.Rental>
        ))}
      </S.Wrapper>
    </AccountWrapper>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
})

Rentals.getLayout = function (page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}
