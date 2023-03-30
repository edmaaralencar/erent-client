import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.section`
  height: calc(100vh - 9rem);

  position: relative;

  padding: 4rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};

  @media (max-width: 1000px) {
    padding: 4rem 2.4rem;
  }

  .square {
    position: absolute;
    top: 0rem;
    right: 0;
    bottom: 0;
    z-index: 1;

    width: 44.7rem;

    background-color: ${({ theme }) => theme.colors.primary.main};

    @media (max-width: 1000px) {
      display: none;
    }
  }
`

export const Container = styled.div`
  position: relative;

  max-width: ${({ theme }) => theme.container.app};
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;

  @media (max-width: 1000px) {
    justify-content: center;
  }
`

export const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 53rem;
  height: 48rem;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 54rem;
    height: 50rem;
    z-index: 2;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`

export const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;

  z-index: 3;
`

export const Title = styled.div`
  max-width: 55rem;

  p {
    margin-top: 2.4rem;
    font-size: 1.8rem;
  }

  @media (max-width: 1000px) {
    text-align: center;
  }

  @media (max-width: 530px) {
    text-align: left;
  }
`
