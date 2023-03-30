import styled, { css, DefaultTheme } from 'styled-components'

export type WrapperProps = {
  size: 'small' | 'medium' | 'large'
  variant: 'primary' | 'success' | 'error' | 'outlined'
  isSubmitting: boolean
}

const wrapperModifiers = {
  small: () => css`
    max-width: 10.6rem;
    padding: 0 2rem;
    height: 4.2rem;

    font-size: 1.4rem;
  `,
  medium: () => css`
    max-width: 16.1rem;
    height: 4.8rem;

    font-size: 1.6rem;

    border-radius: 1.2rem;
  `,
  large: () => css`
    max-width: 33rem;
    height: 5.2rem;

    font-size: 1.6rem;
  `,
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white.main};

    &:hover {
      background-color: #052b63d4;
    }

    .spinner {
      border-left-color: ${({ theme }) => theme.colors.primary.main} !important;
      border-top-color: ${({ theme }) => theme.colors.primary.main} !important;
    }
  `,
  outlined: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.gray.darker};
    border: 3px solid #dedee3;

    &:hover {
      border-color: ${theme.colors.primary.main};
      color: ${theme.colors.primary.main};
    }

    .spinner {
      border-left-color: ${({ theme }) => theme.colors.primary.main} !important;
      border-top-color: ${({ theme }) => theme.colors.primary.main} !important;
    }
  `,
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.green.main};
    color: ${theme.colors.white.main};

    &:hover {
      background-color: ${theme.colors.green.dark};
    }

    .spinner {
      border-left-color: ${theme.colors.green.dark} !important;
      border-top-color: ${theme.colors.green.dark} !important;
    }
  `,
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.red.main};
    color: ${theme.colors.white.main};

    &:hover {
      background-color: ${theme.colors.red.dark};
    }

    .spinner {
      border-left-color: ${theme.colors.red.dark} !important;
      border-top-color: ${theme.colors.red.dark} !important;
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, variant, size, isSubmitting }) => css`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    font-weight: ${theme.font.weight.medium};

    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    text-decoration: none;

    transition: all 300ms ease-in-out 0s;

    ${!!isSubmitting &&
    css`
      span {
        display: none;
      }
    `}

    &:disabled {
      cursor: not-allowed;
    }

    ${!!size && wrapperModifiers[size]};
    ${!!size && wrapperModifiers[variant](theme)}

    .spinner {
      @keyframes spin {
        to {
          transform: rotate(359deg);
        }
      }

      @keyframes grow {
        to {
          width: 20px;
          height: 20px;
          right: 13px;
        }
      }

      width: 0px;
      height: 0px;

      border-radius: 100%;
      border: 2px solid rgba(255, 255, 255, 0.5);

      animation: spin 0.6s infinite linear, grow 0.3s forwards ease-out;
    }
  `}
`
