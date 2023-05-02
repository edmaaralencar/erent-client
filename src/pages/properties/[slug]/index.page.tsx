import { Fragment, ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { FaBath, FaBed } from 'react-icons/fa'
import { Settings } from 'react-slick'
import { useQuery } from '@tanstack/react-query'
import { FiStar } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

import { useOptions } from '@/services/hooks/use-options'
import { getProperties } from '@/services/hooks/use-properties'
import { priceFormatter } from '@/utils/formatter'
import { IProperty, propertySchema } from '@/schemas/properties-schema'
import { ratingsSchema } from '@/schemas/ratings-schema'
import { api } from '@/services/api'

import AppWrapper from '@/components/AppWrapper'
import Checkout from '@/components/Checkout'
import Heading from '@/components/Heading'
import Slider from '@/components/Slider'

import * as S from './styles'
import Spinner from '@/components/Spinner'

type PropertyProps = {
  property: IProperty
}

export default function Property({ property }: PropertyProps) {
  const { data, isLoading } = useOptions()
  const router = useRouter()

  const { data: ratings, isLoading: isRatingsLoading } = useQuery(
    [`ratings/${property.id}`, property.id],
    async () => {
      const response = await api({
        method: 'GET',
        endpoint: `/ratings/${property.id}`
      })

      const ratings = ratingsSchema.parse(response.ratings)

      return ratings
    },
    {
      staleTime: 1000 * 60 * 5
    }
  )

  const formattedOptions = data?.options.map(option => {
    if (property?.options?.some(item => item.id === option.id)) {
      return {
        ...option,
        propertyHas: true
      }
    } else {
      return {
        ...option,
        propertyHas: false
      }
    }
  })

  const settings: Settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1
  }

  if (router.isFallback || isLoading)
    return (
      <S.SpinnerWrapper>
        <Spinner />
      </S.SpinnerWrapper>
    )
  
  const areRatingsLoading = isRatingsLoading || !ratings

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderInfo>
          <small>{property.region}</small>
          <Heading size="medium" level={1}>
            {property.name}
          </Heading>
        </S.HeaderInfo>
        <S.HeaderInfo>
          <small>AO DIA</small>
          <Heading size="medium" level={2}>
            {priceFormatter.format(property.dailyPrice)}
          </Heading>
        </S.HeaderInfo>
      </S.Header>
      <S.HorizontalLine />
      <S.Container>
        <S.PropertyInfo>
          <S.ImageSlider>
            <Slider settings={settings}>
              {property?.images?.map((img, index) => (
                <S.Slide key={index}>
                  <Image fill alt="Image" src={img.url} />
                </S.Slide>
              ))}
            </Slider>
          </S.ImageSlider>

          <S.Info>
            <Heading size="large" level={2}>
              {property.name}
            </Heading>
            <S.PlaceInfo>
              <div>
                <span>{property.rooms}</span>
                <FaBed size={24} />
              </div>
              <S.Divider />
              <div>
                <span>{property.bathrooms}</span>
                <FaBath size={24} />
              </div>
              <S.Divider />
              <span>{property.size} m2</span>
            </S.PlaceInfo>
          </S.Info>
          <S.Description>{property.description}</S.Description>
          <S.Options>
            {formattedOptions?.map(option => (
              <S.Option key={option.id}>
                <S.Icon>
                  <Image
                    src={option.imageUrl}
                    alt={option.name}
                    width={38}
                    height={38}
                  />
                </S.Icon>
                <S.Content propertyHas={option.propertyHas}>
                  {option.name}
                </S.Content>
              </S.Option>
            ))}
          </S.Options>
        </S.PropertyInfo>
        <Checkout
          daily_price={property?.dailyPrice}
          property_id={property?.id}
        />
      </S.Container>
      <S.CommentsContainer>
        {areRatingsLoading ? (
          <p>Carregando...</p>
        ) : (
          <Fragment>
            <S.HorizontalLine />
            <S.CommentsHeader>
              <AiFillStar size={32} color="#18191F" />
              <p>
                {ratings?.length || 0}{' '}
                {ratings?.length > 1 ? 'avaliações' : 'avaliação'}
              </p>
            </S.CommentsHeader>
            {ratings.length > 0 ? (
              <S.Comments>
                {ratings?.map(rating => (
                  <S.Comment key={rating.id}>
                    <S.CommentProfile>
                      <Image src="/avatar.png" fill alt={rating.user} />
                    </S.CommentProfile>
                    <S.CommentContent>
                      <S.CommentHeader>
                        <h3>{rating?.user}</h3>
                        {Array.from(
                          { length: rating?.value },
                          (_, i) => i + 1
                        ).map(index => (
                          <FiStar
                            key={index}
                            size={24}
                            color="#7A7A80"
                            fill="#7A7A80"
                          />
                        ))}
                      </S.CommentHeader>
                      <small>Há {dayjs(rating.createdAt).fromNow()}</small>
                      <p>{rating?.description}</p>
                    </S.CommentContent>
                  </S.Comment>
                ))}
              </S.Comments>
            ) : (
              <S.NotFound>Nenhuma avaliação disponível.</S.NotFound>
            )}
          </Fragment>
        )}
      </S.CommentsContainer>
    </S.Wrapper>
  )
}

export async function getStaticPaths() {
  const { properties } = await getProperties({
    currentPage: 1
  })

  const paths = properties.map(({ id }: { id: string }) => ({
    params: { slug: id }
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await api({
    method: 'GET',
    endpoint: `/properties/${params?.slug}`
  })

  const property = propertySchema.parse(response.property)

  return {
    props: {
      property
    },
    revalidate: 60
  }
}

Property.getLayout = function (page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}
