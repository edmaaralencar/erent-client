import styled from 'styled-components'
import * as SliderStyles from '@/components/Slider/styles'
import { motion } from 'framer-motion'

export const TypeContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  margin: 8rem auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`

export const Testimonials = styled.section`
  background-color: ${({ theme }) => theme.colors.primary.main};
  padding: 6rem 0;

  margin: 10rem 0;

  ${SliderStyles.Wrapper} {
    .slick-list {
      margin: 0 -2.4rem;
    }
    .slick-slide > div {
      padding: 0 2.4rem;
    }

    li {
      background: none;
      width: 1rem;
      height: 1rem;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      border: 2px solid #f5f8fa;

      &.slick-active {
        background: ${({ theme }) => theme.colors.white.main};
        border: none;
      }

      button {
        opacity: 0;
        cursor: pointer;
        background: transparent;
        border: none;
      }
    }
  }
`

export const TestimonialsContainer = styled.div`
  max-width: ${({ theme }) => theme.container.app};
  width: 100%;
  padding: 0 2.4rem;

  margin: 0 auto;
`

export const Testimonial = styled.div`
  width: 50rem;
  height: 32rem;

  margin-right: 4rem;
`

export const TestimonialContent = styled.div`
  width: 100%;
  min-height: 24rem;
  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.colors.white.main};
  border-radius: 1rem;

  text-align: center;

  h4 {
    font-size: 1.8rem;
  }

  p {
    line-height: 2.4rem;
    font-size: 1.4rem;
  }
`

export const TestimonialInfo = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 2.4rem;

  .flex {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }

  img {
    border-radius: 50%;
  }
`

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;

  color: ${({ theme }) => theme.colors.white.main};

  strong {
    font-size: 1.4rem;
  }
`

export const PropertiesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: 100%;

    @media (max-width: 650px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
    }

    a {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.black.main};
    }
  }
`

export const Hr = styled(motion.div)`
  height: 2px;
  width: 100%;

  border: none;
  border-radius: 8px;
  background-color: #dedee3;
`

export const PropertiesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4rem;

  @media (max-width: 1090px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`
