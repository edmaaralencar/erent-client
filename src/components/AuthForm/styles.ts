import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media (max-width: 890px) {
    grid-template-columns: 1fr;

    padding: 0 2.4rem;
  }
`

export const Logo = styled(Link)`
  position: absolute;

  top: 2.4rem;
  left: 2.4rem;

  z-index: 100;
`

export const LogoWrapper = styled(motion.div)``

export const ImageContainer = styled(motion.div)`
  position: relative;
  object-fit: cover;

  @media (max-width: 890px) {
    display: none;
  }
`

export const FormWrapper = styled(motion.form)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 100%;
  max-width: 32rem;

  button,
  a {
    max-width: 100%;
    width: 100%;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  p {
    text-align: center;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ForgotPasswordLink = styled.a`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.4rem;
`
