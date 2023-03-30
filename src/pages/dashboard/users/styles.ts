import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.container.dashboard};

  margin: 0 auto;
  padding: 0 3.2rem;
`

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  border-radius: 2rem;
  -webkit-border-radius: 2rem;
  -moz-border-radius: 2rem;

  overflow: hidden;

  thead {
    background-color: ${({ theme }) => theme.colors.primary.main};
  }

  tbody {
    background-color: rgba(255, 255, 255, 0.8);
  }
`

export const Tr = styled.tr`
  display: grid;
  grid-template-columns: 0.5fr 1fr 2fr 1fr 1fr;
  align-items: center;
  margin: 0px 3.2rem;
  padding: 2.4rem 0px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main};
  }

  @media (max-width: 1000px) {
    grid-template-columns: 0.5fr 2fr 1fr 1fr;

    .name {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 1fr 1fr;

    .email {
      display: none;
    }
  }
`

export const Th = styled.th`
  color: ${({ theme }) => theme.colors.white.main};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: 1.6rem;
`

export const Td = styled.td`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  &:first-child {
    text-align: left;
  }

  .avatar {
    width: 3.8rem;
    height: 3.8rem;
    border-radius: 50%;
  }
`
