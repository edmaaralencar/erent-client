import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.container.dashboard};

  margin: 0 auto;
  padding: 0 3.2rem;
`

export const PropertiesContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  gap: 3.2rem;
`

export const Property = styled(motion.div)`
  border-radius: 1.6rem;
  border: 1px solid #dce2e5;
`

export const ImageContainer = styled.div`
  position: relative;

  height: 16rem;

  .property-image {
    border-radius: 1.6rem 1.6rem 0 0;
  }
`

export const ButtonContainer = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;

  display: flex;
  gap: 0.4rem;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding: 2.4rem;

  background-color: ${({ theme }) => theme.colors.white.main};

  border-radius: 0 0 1.6rem 1.6rem;

  strong {
    color: #123952;
    font-size: 2rem;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  }

  .city {
    font-size: 1.6rem;
    font-weight: ${({ theme }) => theme.font.weight.light};

    color: ${({ theme }) => theme.colors.gray.main};
  }

  a {
    margin-top: 2.4rem;
    max-width: initial;
  }
`
