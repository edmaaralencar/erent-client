import { ITEM_ANIMATION } from '../../utils/animations'
import Image from 'next/image'
import Button from '../Button'
import * as S from './styles'

type TypeCardProps = {
  name: string
  description: string
  href: string
  type: 'apartment' | 'house'
}

function TypeCard({ name, description, href, type }: TypeCardProps) {
  return (
    <S.Wrapper variants={ITEM_ANIMATION}>
      <S.Content>
        <strong>{name}</strong>
        <p>{description}</p>
        <Button size="small">Veja mais</Button>
      </S.Content>
      <S.ImageWrapper>
        <Image src="/image.png" alt="image" fill />
      </S.ImageWrapper>
    </S.Wrapper>
  )
}

export default TypeCard
