import styled, { css } from 'styled-components'

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

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;
  
  margin-bottom: 1.6rem;

  ${({ theme }) => css`
    label {
      font-size: 1.6rem;

      margin-bottom: 0.8rem;
      color: ${theme.colors.primary.dark};
    }

    textarea {
      width: 100%;
      height: 18rem;
      padding: 1.3rem 1.8rem;

      /* font-family: '__Inter_231d4d', '__Inter_Fallback_231d4d'; */

      resize: none;
      outline: none;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      transition: border-color 0.3s ease-in;
      border: 1px solid ${theme.colors.gray.main};
      background-color: transparent;

      &::placeholder {
        color: ${theme.colors.gray.main};
        font-weight: ${theme.font.weight.medium};
      }

      &:focus {
        border-color: ${theme.colors.gray.darker};
      }
    }

    .error {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      margin-top: 1rem;

      font-size: 1.3rem;
      color: ${theme.colors.red.main};
    }
  `}
`
