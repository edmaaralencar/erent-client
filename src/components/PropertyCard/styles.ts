import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;

  border-radius: 1rem;
  border: 0.2rem solid #dce2e5;
`

export const PropertyHeader = styled.p`
  font-size: 2.4rem;

  strong {
    font-weight: bold;
  }
`

export const PropertyImage = styled.div`
  position: relative;

  max-width: 100%;
  height: 24rem;
  border-radius: 0.8rem;

  img {
    border-radius: 0.8rem;
  }

  @media (max-width: 1090px) {
    height: 32rem;
  }

  @media (max-width: 830px) {
    height: 37rem;
  }
`

export const PropertyDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 3.2rem;
    font-weight: bold;

    small {
      font-size: 2rem;
      font-weight: normal;
    }
  }
`

export const PropertyContent = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.4rem;
    color: #858585;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }

  strong {
    margin-top: 1.6rem;
    margin-bottom: 3.2rem;

    font-size: 3.2rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};

    small {
      font-size: 1.6rem;
      color: #858585;
    }
  }

  a {
    max-width: 100%;
    margin-top: 2.4rem;
  }
`

export const PropertyHouseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  span {
    font-size: 2rem;
  }
`

export const HouseInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const Divider = styled.div`
  width: 2px;
  height: 3.4rem;
  background: ${({ theme }) => theme.colors.primary.main};
`
