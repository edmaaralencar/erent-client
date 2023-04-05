import styled from 'styled-components'
import { Container } from '../Container'

export const Wrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`

export const FooterContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.6rem;
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 1.6rem;
`

export const Icon = styled.a`
  height: 4rem;
  width: 4rem;
  text-decoration: none;

  display: grid;
  place-items: center;
  border-radius: 9999px;

  background-color: ${({ theme }) => theme.colors.gray.light};
`
