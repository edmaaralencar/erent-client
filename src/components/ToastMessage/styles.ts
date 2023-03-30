import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  strong {
    font-weight: 600;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.gray.dark};
  }
`
