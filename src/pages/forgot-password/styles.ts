import styled from 'styled-components'

export const Wrapper = styled.form`
  width: 100%;
  max-width: 60rem;

  margin: 0 auto;
  margin-top: 3.2rem;
  padding: 2.4rem;

  background: ${({ theme }) => theme.colors.gray.lighter};

  h1,
  p {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    margin-top: 2.4rem;
    color: ${({ theme }) => theme.colors.gray.darker};
    font-size: 1.4rem;
  }
`

export const Description = styled.p`
  margin: 2rem 0;

  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.gray.dark};
`

export const InputContainer = styled.div`
  margin-top: 2.6rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  input {
    max-width: 100%;
  }

  button {
    max-width: 100%;
  }
`
