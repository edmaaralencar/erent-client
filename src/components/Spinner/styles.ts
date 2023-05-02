import styled from 'styled-components'
import { SpinnerProps } from '.'

export const Wrapper = styled.main<SpinnerProps>`
  /* height: calc(100vh - ${({ height }) => height}rem);
  display: grid;
  place-items: center; */

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  .loading {
    width: 10rem;
    height: 10rem;
    border: 5px solid ${({ theme }) => theme.colors.primary.dark};

    /* border: 5px solid #3a1653; */
    border-radius: 50%;
    /* border-top-color: #421561; */
    border-top-color: #1d57ac;

    animation: spinner 2s linear infinite;
    margin: 0 auto;
  }
`
