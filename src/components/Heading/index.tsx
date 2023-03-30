import { ReactNode } from 'react'
import * as S from './styles'

type HeadingProps = {
  size?: 'medium' | 'large'
  level?: 1 | 2 | 3 | 4 | 5 | 6
  weight?: 'medium' | 'bold' | 'semibold'
  children: ReactNode
}

function Heading({
  size = 'medium',
  level = 6,
  weight = 'bold',
  children
}: HeadingProps) {
  return (
    <S.Wrapper size={size} level={level} weight={weight}>
      {children}
    </S.Wrapper>
  )
}

export default Heading
