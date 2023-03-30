import styled from 'styled-components'

export const Wrapper = styled.div`
  position: sticky !important;
  top: 32px;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  /* width: 100%; */
  width: 41.5rem;
  height: 41.5rem;
  padding: 4.4rem;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
  border-radius: 0.8rem;

  /* > .spinner {
    @keyframes spin {
      to {
        transform: rotate(359deg);
      }
    }

    @keyframes grow {
      to {
        width: 10rem;
        height: 10rem;
        right: 13px;
      }
    }

    width: 0px;
    height: 0px;

    border-radius: 100%;
    border: 2px solid rgba(255, 255, 255, 0.5);

    animation: spin 0.6s infinite linear, grow 0.3s forwards ease-out; */
  /* } */

  .button {
    max-width: initial;
    padding: 2.2rem;
  }

  h4 {
    color: ${({ theme }) => theme.colors.text};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
    font-size: 3.2rem;

    span {
      font-size: 1.8rem;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  position: relative;

  font-size: 100%;

  .mantine-InputWrapper-root {
    max-width: 100%;
  }

  .mantine-DatePickerInput-input,
  .mantine-DatePickerInput-wrapper {
    height: 4.8rem;
    font-size: 1.4rem;
  }

  .mantine-b1kpwj[data-weekend] {
    color: #000 !important;
  }

  .mantine-b1kpwj[data-selected] {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }
`

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.gray.darker};
  }
`

export const HorizontalLine = styled.hr`
  height: 0.2rem;
  background: #d0d0d3;
  width: 100%;
`
