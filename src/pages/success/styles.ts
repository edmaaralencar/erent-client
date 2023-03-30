import styled from 'styled-components'

export const Wrapper = styled.section`
  max-width: ${({ theme }) => theme.container.app};
  margin: 0 auto;

  padding: 2.4rem;

  display: grid;
  align-items: center;
  justify-content: center;

  height: calc(100vh - 18rem);
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;

  max-width: 55rem;

  h1 {
    text-align: center;
  }

  p {
    font-size: 1.6rem;
    text-align: center;
    line-height: 2.8rem;
  }
`

export const Image = styled.div`
  position: relative;
  height: 30rem;
  width: 40rem;
`
