import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.container.dashboard};

  margin: 0 auto;
  padding: 0 3.2rem;
`

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => css`
    label {
      font-size: 1.8rem;

      margin-bottom: 0.8rem;
      color: ${theme.colors.primary.dark};
    }

    textarea {
      width: 100%;
      height: 18rem;
      padding: 2.2rem 2.4rem;

      font-family: '__Inter_231d4d', '__Inter_Fallback_231d4d';

      resize: none;
      outline: none;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      transition: border-color 0.3s ease-in;
      border: 1px solid ${theme.colors.gray.lighter};
      background-color: ${theme.colors.gray.lighter};

      &::placeholder {
        color: ${theme.colors.gray.main};
        font-weight: ${theme.font.weight.medium};
      }

      &:focus {
        border-color: ${theme.colors.primary.main};
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

export const Upload = styled.div`
  display: flex;
  flex-direction: column;

  .upload-label {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  .upload-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 16rem;

    color: ${({ theme }) => theme.colors.primary.main};
    background-color: ${({ theme }) => theme.colors.gray.lighter};
    font-size: 1.6rem;

    border-radius: 1.6rem;
    border: 2px dashed #dce2e6;

    cursor: pointer;
  }
`

export const ListImages = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-left: 1.55rem;

  li {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.primary.dark};
  }
`

export const OptionsContainer = styled.div``

export const OptionButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.2rem 2.4rem;

  outline: none;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.gray.lighter};
`

export const Options = styled(motion.ul)`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  flex-wrap: wrap;
  padding: 1.6rem;
  margin-top: 0.5rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.5rem 0.5rem 0 0;
`

type OptionProps = {
  isOptionSelected: boolean
}

export const Option = styled.button<OptionProps>`
  ${({ theme, isOptionSelected }) => css`
    padding: 0.8rem;

    outline: none;
    border: none;
    border-radius: 0.8rem;

    background-color: ${theme.colors.white.main};
    color: ${theme.colors.text};
    font-weight: ${theme.font.weight.light};
    font-size: 1.6rem;

    ${isOptionSelected &&
    css`
      background: #b9b9b9;
      color: ${theme.colors.white.main};
    `}
  `}
`
