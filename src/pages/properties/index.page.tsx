import { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { GetServerSidePropsContext } from 'next'

import { CONTAINER_ANIMATION, DIVIDER_ANIMATION } from '@/utils/animations'
import { IProperties, propertiesSchema } from '@/schemas/properties-schema'
import { api } from '@/services/api'

import AppWrapper from '@/components/AppWrapper'
import PropertyCard from '@/components/PropertyCard'
import Heading from '@/components/Heading'
import Pagination from '@/components/Pagination'

import * as S from './styles'

type PropertiesProps = {
  properties: IProperties
  totalCount: number
}

export default function Properties({
  properties,
  totalCount
}: PropertiesProps) {
  const router = useRouter()

  const { page } = router.query

  function handlePageChange(page: number) {
    router.push(`/properties?page=${page}`)
  }

  return (
    <S.Wrapper>
      <S.Title>
        <Heading weight="semibold">Propriedades</Heading>
        <S.Hr variants={DIVIDER_ANIMATION} initial="hidden" animate="show" />
      </S.Title>

      <S.PropertiesContainer
        variants={CONTAINER_ANIMATION({})}
        initial="hidden"
        animate="show"
        viewport={{ once: true }}
      >
        {properties.map(property => (
          <PropertyCard
            key={property.id}
            image={property.images[0].url}
            name={property.name}
            id={property.id}
            bathrooms={property.bathrooms}
            rooms={property.rooms}
            city={property.city}
            dailyPrice={property.dailyPrice}
            size={property.size}
          />
        ))}
      </S.PropertiesContainer>
      <Pagination
        totalCountOfRegisters={totalCount}
        currentPage={Number(page)}
        perPage={9}
        onPageChange={handlePageChange}
      />
    </S.Wrapper>
  )
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { page = 1, region = '', dailyPrice = 0, rooms = 0 } = context.query

  const response = await api({
    method: 'GET',
    endpoint: `/properties?page=${page}&region=${region}&dailyPrice=${dailyPrice}&rooms=${rooms}`
  })

  const properties = propertiesSchema.parse(response.properties)

  return {
    props: {
      properties,
      totalCount: response.totalCount
    }
  }
}

Properties.getLayout = function (page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}
