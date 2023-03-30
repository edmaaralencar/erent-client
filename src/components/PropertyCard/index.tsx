import { ITEM_ANIMATION } from '../../utils/animations'
import { FaBath, FaBed } from 'react-icons/fa'

import Button from '../Button'

import * as S from './styles'
import Image from 'next/image'

type PropertyCardProps = {
  image: string
  name: string
  city: string
  dailyPrice: string
  rooms: number
  bathrooms: number
  size: number
  id: string
}

function PropertyCard({
  image,
  name,
  city,
  dailyPrice,
  rooms,
  bathrooms,
  size,
  id
}: PropertyCardProps) {
  return (
    <S.Wrapper variants={ITEM_ANIMATION}>
      <S.PropertyImage>
        <Image src={image} alt={name} fill />
      </S.PropertyImage>
      <S.PropertyContent>
        <h3>
          {name} - {city}
        </h3>
        <strong>
          {dailyPrice} <small>/ noite</small>
        </strong>
        <S.PropertyHouseInfo>
          <S.HouseInfo>
            <span>{rooms}</span>
            <FaBed size={22} />
          </S.HouseInfo>
          <S.Divider />
          <S.HouseInfo>
            <span>{bathrooms}</span>
            <FaBath size={22} />
          </S.HouseInfo>
          <S.Divider />
          <div>
            <span>{size} m2</span>
          </div>
        </S.PropertyHouseInfo>
        <Button size="small" as="a" href={`/properties/${id}`}>
          Veja mais
        </Button>
      </S.PropertyContent>
    </S.Wrapper>
  )
}

export default PropertyCard
