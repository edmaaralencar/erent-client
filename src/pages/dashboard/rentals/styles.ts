import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.container.dashboard};

  margin: 0 auto;
  padding: 0 3.2rem;
`

export const ScrollWrapper = styled.div`
  @media (max-width: 1125px) {
    overflow-x: scroll;
  }
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
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  margin: 0px 3.2rem;
  padding: 2.4rem 0px;

  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary.main};
  }

  @media (max-width: 1000px) {
    margin: 0 2.4rem;
  }
`

export const Th = styled.th`
  color: ${({ theme }) => theme.colors.white.main};
  font-weight: ${({ theme }) => theme.font.weight.light};
  font-size: 1.6rem;
`

export const Td = styled.td`
  min-width: 18rem;

  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`
 