import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;

  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
`

export const Content = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 4;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 44.6rem;
  max-width: 60rem;
  width: 90%;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.5rem;
  text-align: center;
`

export const ImageContainer = styled.div`
  margin-bottom: 4rem;
`

export const Description = styled.p`
  ${({ theme }) => css`
    margin: 3.2rem;

    color: ${theme.colors.gray.dark};
    font-weight: ${theme.font.weight.light};
    font-size: 1.8rem;
    text-align: center;
  `}
`

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 0.8rem;
  width: 100%;
`
