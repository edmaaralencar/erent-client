import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  max-width: ${({ theme }) => theme.container.app};
  margin: 0 auto;

  padding: 2.4rem;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 32.2rem 1fr;
  align-items: flex-start;
  gap: 5.6rem;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
    gap: 2.4rem;
  }
`

export const Navbar = styled(motion.nav)`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    @media (max-width: 1120px) {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  }
`

type NavLinkProps = {
  active: boolean
}

export const NavLink = styled.a<NavLinkProps>`
  padding: 2rem;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.primary.main : theme.colors.gray.lighter};
  width: 100%;

  transition: background-color 0.2s ease-in;
  cursor: pointer;

  text-decoration-color: none;

  display: flex;
  align-items: center;
  gap: 1.2rem;

  font-size: 1.6rem;
  text-decoration: none;
  border: none;

  color: ${({ theme, active }) =>
    active ? theme.colors.white.main : theme.colors.black.main};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.white.main};

    button {
      color: ${({ theme }) => theme.colors.white.main};
    }

    .icon {
      color: ${({ theme }) => theme.colors.white.main} !important;
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer;

    font-size: 1.6rem;
    text-decoration: none;
    background: transparent;
    border: none;

    color: ${({ theme, active }) =>
      active ? theme.colors.white.main : theme.colors.black.main};
  }
`

export const Content = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};

  h2 {
    position: relative;
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    width: fit-content;

    &::before {
      content: '';
      position: absolute;
      right: 40%;
      left: 0;
      height: 0.3rem;
      bottom: -1rem;
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`
