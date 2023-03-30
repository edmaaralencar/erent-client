import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 34rem;
  margin-top: 10rem;

  .top {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    height: 50%;
    width: 100%;

    background-color: ${({ theme }) => theme.colors.primary.main};
  }

  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;

    height: 50%;
    width: 100%;
  }
`

export const StatsWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.container.app};
  padding: 0 2.4rem;
`

export const Container = styled(motion.div)`
  ${({ theme }) => css`
    min-height: 24rem;
    width: 100%;

    box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
    border-radius: 2rem;
    background-color: ${theme.colors.white.main};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
  `}
`

export const Item = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;

  min-width: 20rem;

  @media (max-width: 768px) {
    min-width: 13rem;
  }
`

export const ItemIcon = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  display: grid;
  place-items: center;

  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.gray.light};

  @media (max-width: 768px) {
    width: 4.8rem;
    height: 4.8rem;
  }
`

export const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  text-align: center;

  strong {
    font-size: 4rem;
  }

  span {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    strong {
      font-size: 3.2rem
    }

    span {
      font-size: 1.4rem;
    }
  }
`
