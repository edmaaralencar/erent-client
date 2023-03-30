import styled from 'styled-components'

export const InputWrapper = styled.div`
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

