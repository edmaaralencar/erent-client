import * as S from './styles'

import { useRouter } from 'next/router'
import Image from 'next/image'
import Heading from '@/components/Heading'
import { dateFormatter, priceFormatter } from '@/utils/formatter'
import Button from '@/components/Button'
import AppWrapper from '@/components/AppWrapper'
import { ReactElement } from 'react'
import { useQuery } from '@tanstack/react-query'
import { api } from '@/services/api'
import { withSSRAuth } from '@/utils/with-ssr-auth'

export default function Success() {
  const { query } = useRouter()

  const id = query.id

  const { data, isLoading } = useQuery(
    [`rental/payment-intent/${id}`, id],
    async () => {
      const { rental } = await api({
        method: 'GET',
        endpoint: `/rentals/${id}`
      })

      return rental
    },
    {
      staleTime: 1000 * 60 * 5,
      enabled: !!id
    }
  )

  if (isLoading) {
    return <h1>Carregando...</h1>
  }

  return (
    <S.Wrapper>
      <S.Container>
        <Heading level={1}>
          Parabéns, sua compra foi efetuada com sucesso!
        </Heading>
        <S.Image>
          <Image
            src={`https://erent-client-images.s3.amazonaws.com/${data?.property?.images[0].filename}`}
            alt={data?.property?.name}
            fill
          />
        </S.Image>
        <p>
          O aluguél da propriedade <strong>{data?.property.name}</strong> em{' '}
          <strong>{data?.property.city}</strong> foi feito com sucesso para o
          dia <strong>{dateFormatter.format(new Date(data?.check_in))}</strong>{' '}
          até o dia{' '}
          <strong>{dateFormatter.format(new Date(data?.checkout))}</strong> por{' '}
          <strong>{priceFormatter.format(data?.total / 100)}</strong>.
        </p>
        <Button size="large" as="a" href="/rentals">
          Ver meus alugueis
        </Button>
      </S.Container>
    </S.Wrapper>
  )
}

Success.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
})
