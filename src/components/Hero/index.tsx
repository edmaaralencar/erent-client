import Image from 'next/image'

import Heading from '../Heading'
import SearchPropertyBox from '../SearchPropertyBox'

import * as S from './styles'

const CONTENT_ANIMATION = {
  hidden: {
    y: '-100%',
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      duration: 0.3
    }
  }
}

const IMAGE_ANIMATION = {
  hidden: {
    scale: 0.4,
    opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      duration: 0.5
    }
  }
}

function Hero() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content variants={CONTENT_ANIMATION} initial="hidden" animate="show">
          <S.Title>
            <Heading level={1}>Encontre o lugar perfeito para alugar</Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Condimentum diam orci pretiu.
            </p>
          </S.Title>
          <SearchPropertyBox />
        </S.Content>
        <S.ImageWrapper
          variants={IMAGE_ANIMATION}
          initial="hidden"
          animate="show"
        >
          <Image src="/image.png" fill alt="" />
        </S.ImageWrapper>
      </S.Container>
      <div className="square"></div>
    </S.Wrapper>
  )
}

export default Hero
