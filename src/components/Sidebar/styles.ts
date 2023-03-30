import styled from 'styled-components'

export const Wrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;

  display: flex;
  align-items: center;

  width: 9.6rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.primary.main};

  @media (max-width: 600px) {
    bottom: 0;
    right: 0;
    top: initial;

    width: auto;
    height: 7rem;
  }
`

export const NavList = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;

  margin-top: -8rem;

  .nav-button {
    display: none;
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);

    margin-top: 0;

    .nav-button {
      display: block;
    }
  }
`

type NavLinkProps = {
  active?: boolean
}

export const NavLink = styled.a<NavLinkProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;

  cursor: pointer;
  transition: all 300ms ease-in-out 0s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &.active {
    background: rgba(255, 255, 255, 0.1);
  }

  background-color: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};

  @media (max-width: 600px) {
    padding: 1.8rem;
  }
`

export const NavButton = styled(NavLink)`
  position: absolute;
  bottom: 1rem;

  width: 100%;

  background-color: transparent;
  border: none;

  @media (max-width: 600px) {
    display: none;
    width: auto;
    position: initial;
  }
`
export const NavLogo = styled(NavLink)`
  position: absolute;
  top: 1rem;

  width: 100%;

  background-color: transparent;
  border: none;

  @media (max-width: 600px) {
    display: none;
    width: auto;
    position: initial;
  }
`
