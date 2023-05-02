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
import {
  prices,
  rooms as roomsConstant
} from '@/components/SearchPropertyBox/constants'
import { priceFormatter } from '@/utils/formatter'

type PropertiesProps = {
  properties: IProperties
  totalCount: number
}

export default function Properties({
  properties,
  totalCount
}: PropertiesProps) {
  const router = useRouter()

  const { page, region, rooms, dailyPrice } = router.query

  function handlePageChange(page: number) {
    router.push(`/properties?page=${page}`)
  }

  function handleRegionFilter(region: string) {
    if (region === 'all') {
      router.push(`/properties?page=1`)
    } else {
      router.push(`/properties?page=1&region=${region}`)
    }
  }

  function handleRoomsFilter(rooms: string) {
    if (rooms === 'all') {
      router.push(`/properties?page=1`)
    } else {
      router.push(`/properties?page=1&rooms=${rooms}`)
    }
  }

  function handlePriceFilter(price: string) {
    if (price === 'all') {
      router.push(`/properties?page=1`)
    } else {
      router.push(`/properties?page=1&dailyPrice=${price}`)
    }
  }

  return (
    <S.Wrapper>
      <S.Title>
        <Heading weight="semibold">Propriedades</Heading>
        <S.Hr variants={DIVIDER_ANIMATION} initial="hidden" animate="show" />
      </S.Title>

      <S.Filters>
        <S.Filter>
          <label htmlFor="">Região</label>
          <select
            placeholder="Escolha uma opção"
            onChange={event => handleRegionFilter(event.target.value)}
            defaultValue={region ? region : 'all'}
          >
            <S.Option value="all">Todas</S.Option>
            <S.Option value="Nordeste">Nordeste</S.Option>
            <S.Option value="Norte">Norte</S.Option>
            <S.Option value="Sul">Sul</S.Option>
            <S.Option value="Sudeste">Sudeste</S.Option>
            <S.Option value="Centro-oeste">Centro-oeste</S.Option>
          </select>
        </S.Filter>
        <S.Filter>
          <label htmlFor="">Qtd de quartos</label>
          <select
            placeholder="Escolha uma opção"
            onChange={event => handleRoomsFilter(event.target.value)}
            defaultValue={rooms ? rooms : 'all'}
          >
            <S.Option value="all">Todos</S.Option>
            {roomsConstant.map(room => (
              <S.Option key={room}>{room}</S.Option>
            ))}
          </select>
        </S.Filter>
        <S.Filter>
          <label htmlFor="">Preço da diária</label>
          <select
            placeholder="Escolha uma opção"
            onChange={event => handlePriceFilter(event.target.value)}
            defaultValue={dailyPrice ? dailyPrice : 'all'}
          >
            <S.Option value="all">Todos</S.Option>
            {prices.map(price => (
              <S.Option value={price} key={price}>
                Até {priceFormatter.format(price)}
              </S.Option>
            ))}
          </select>
        </S.Filter>
      </S.Filters>

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
