import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.container.dashboard};

  margin: 0 auto;
  margin-bottom: 8rem;
  padding: 0 3.2rem;
`

export const ImageContainer = styled(motion.div)`
  position: relative;

  width: 100%;
  height: 45rem;

  border-radius: 0 0 1.8rem 1.8rem;

  .property-image {
    width: 100%;
    height: 100%;
    border-radius: 0.2rem 0.2rem 1.8rem 1.8rem;
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  margin-top: 4rem;
  margin-bottom: 3.2rem;

  span {
    ${({ theme }) => css`
      font-size: 1.8rem;
      font-weight: ${theme.font.weight.light};
      color: ${theme.colors.gray.dark};
    `}
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  span {
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 1.8rem;
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const VerticalLine = styled.hr`
  height: 3rem;
  width: 0.3rem;

  background-color: ${({ theme }) => theme.colors.primary.main};
`

export const Body = styled.p`
  max-width: 72rem;

  margin: 5.6rem 0;

  color: ${({ theme }) => theme.colors.gray.dark};
  font-size: 1.6rem;
  line-height: 2.8rem;
`

export const Options = styled(motion.div)`
  display: flex;
  gap: 0.8rem 1.6rem;
  flex-wrap: wrap;

  max-width: 64rem;
`

export const OptionWrapper = styled(motion.div)`
  width: 100%;
  max-width: 31rem;
`

type OptionProps = {
  propertyHas: boolean
}

export const Option = styled.div<OptionProps>`
  ${({ theme, propertyHas }) => css`
    display: flex;
    align-items: center;

    width: 100%;
    max-width: 31rem;

    background-color: ${theme.colors.white.main};
    border-bottom: 0.3rem solid ${({ theme }) => theme.colors.gray.light};

    span {
      color: ${theme.colors.gray.dark};
      font-size: 1.8rem;
      font-weight: ${theme.font.weight.medium};

      text-decoration: ${!!propertyHas && 'line-through'};

      padding-left: 2.4rem;
    }
  `}
`

export const OptionIcon = styled.div`
  padding: 1.2rem 3rem;

  border-right: 0.3rem solid ${({ theme }) => theme.colors.gray.light};
`
