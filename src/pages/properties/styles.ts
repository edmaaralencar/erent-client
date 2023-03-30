import { Container } from '@/components/Container'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
