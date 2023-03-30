import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  margin-top: 9.9rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Dashboard = styled.section`
  width: calc(100vw - 9.6rem);
  margin-left: 9.6rem;
  padding: 4.8rem 0;
  /* overflow-y: scroll; */

  @media (max-width: 600px) {
    width: 100vw;
    margin-left: 0;
  }
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: 2;

  width: calc(100vw - 9.6rem);
  padding: 2.5rem 0;
  margin-left: 9.6rem;

  background-color: ${({ theme }) => theme.colors.white.main};
  border-bottom: 1px solid #dce2e5;

  @media (max-width: 600px) {
    right: 0;
    left: 0;

    width: auto;
    margin-left: 0;
  }
`

export const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.container.dashboard};

  padding: 0 3.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;

  .button-container {
    display: flex;
    justify-content: flex-end;
    gap: 1.6rem;

    width: 100%;
    max-width: 33rem;

    .big-button {
      @media (max-width: 600px) {
        display: none;
      }
    }

    .small-button {
      @media (min-width: 600px) {
        display: none;
      }
    }
  }
`
