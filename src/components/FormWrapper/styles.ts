import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 100%;
  max-width: 80rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  padding: 4.8rem 6.4rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.white.main};
  border-radius: 1rem;

  @media (max-width: 768px) {
    padding: 3.2rem;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 2.4rem;

  margin-top: 3.2rem;

  @media (max-width: 768px) {
    gap: 1.4rem;
  }

  @media (max-width: 450px) {
    flex-direction: column;
  }
`
