import styled from 'styled-components'

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .upload-label {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  .upload-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8rem;
    width: 8rem;

    color: ${({ theme }) => theme.colors.primary.main};
    background-color: ${({ theme }) => theme.colors.gray.lighter};
    font-size: 1.6rem;

    border-radius: 9999px;
    border: 2px dashed #dce2e6;

    cursor: pointer;
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  span {
    line-height: 2rem;
    font-size: 1.4rem;
  }
`

export const ImageContainer = styled.div`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
  background-color: red;
`

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5.6rem;

  width: 100%;
`
