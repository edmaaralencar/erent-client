import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: #f5f8fa;

    h2 {
      color: ${theme.colors.text};
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  `}
`

// export const SpinnerWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   height: 10rem;

//   &.loader {
//     justify-self: center;
//     @keyframes spin {
//       to {
//         transform: rotate(359deg);
//       }
//     }

//     @keyframes grow {
//       to {
//         width: 10rem;
//         height: 10rem;
//         right: 13px;
//       }
//     }

//     width: 0px;
//     height: 0px;

//     border-radius: 100%;
//     border: 2px solid rgba(255, 255, 255, 0.5);
//     border-left-color: ${({ theme }) => theme.colors.primary.main} !important;
//     border-top-color: ${({ theme }) => theme.colors.primary.main} !important;

//     animation: spin 0.6s infinite linear, grow 0.3s forwards ease-out;
//   }
// `

export const ButtonContainer = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
  align-items: center;

  .cancel-button {
    text-decoration: none;
    text-align: center;
    font-size: 1.8rem;
    background-color: transparent;
    border: none;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.primary.main};
    transition: color 0.1s ease-in;
    &:hover {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`

export const Error = styled.p`
  color: red;
  font-size: 1.4rem;
  margin: 1.4rem 0;
`
