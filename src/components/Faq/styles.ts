import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  h2 {
    text-align: center;
  }
`

export const ItemsContainer = styled(motion.div)`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const ItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`

type ItemProps = {
  isActive: boolean
}

export const Item = styled.button<ItemProps>`
  all: unset;
  display: flex;
  flex-direction: column;

  padding: 1.6rem 2rem;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.gray.light : 'transparent'};

  cursor: pointer;
  border: 2px solid ${({ theme }) => theme.colors.gray.light};
  border-radius: 0.8rem;
`

export const ItemQuestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.6rem;
  }
`

export const ItemAnswer = styled(motion.div)`
  p {
    margin-top: 1.6rem;
    font-size: 1.2rem;
    line-height: 1.8;
  }
`
