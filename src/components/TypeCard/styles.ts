import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)`
  border: 2px solid #dce2e6;
  border-radius: 1.6rem;

  display: flex;

  @media (max-width: 960px) {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
  }

  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 2.4rem;

  @media (max-width: 500px) {
    gap: 1.6rem;
  }

  strong {
    font-size: 3.2rem;
    /* line-height:  6.4rem; */
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray.darker};
  }

  button {
    max-width: 100%;
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  width: 25.2rem;
  height: 24rem;

  img {
    border-radius: 1.6rem;
  }

  @media (max-width: 960px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    order: -1;
  }
`
