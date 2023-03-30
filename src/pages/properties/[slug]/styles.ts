import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.container.app};
  margin: 0 auto;

  padding: 2.4rem;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 6rem;
`

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  small {
    color: ${({ theme }) => theme.colors.gray.main};
    font-size: 1.4rem;
    font-weight: ${({ theme }) => theme.font.weight.medium};
  }
`

export const HorizontalLine = styled.hr`
  height: 0.1rem;
  width: 100%;

  margin-top: 2rem;
  margin-bottom: 5.6rem;

  background-color: #dedee3;
`

export const Container = styled.div`
  display: flex;
  grid-template-columns: 2fr 1fr;
  gap: 6rem;
  max-width: 130rem;

  position: relative;
`

export const PropertyInfo = styled.section`
  width: calc(100% - 47.5rem);
`

export const ImageSlider = styled.div``

export const Slide = styled.div`
  position: relative;
  height: 40rem;
`

export const Info = styled.div`
  margin-top: 5.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`

export const PlaceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2.4rem;

  div {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    span {
      font-size: 1.8rem;
    }
  }

  span {
    font-size: 1.8rem;
  }
`

export const Divider = styled.div`
  width: 0.2rem;
  height: 3.5rem;
  background: ${({ theme }) => theme.colors.primary.main};
`

export const Description = styled.p`
  margin: 6rem 0;
  font-size: 2rem;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.colors.gray.dark};
`

export const Options = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.4rem;
`

export const Option = styled.div`
  display: flex;

  background-color: ${({ theme }) => theme.colors.gray.lighter};
`

export const Icon = styled.div`
  padding: 1.4rem 3rem;
  border-right: 0.3rem solid #ffffff;
`

type ContentProps = {
  propertyHas: boolean
}

export const Content = styled.div<ContentProps>`
  padding: 0 2.4rem;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colors.gray.dark};

  text-decoration: ${({ propertyHas }) => !!propertyHas && 'line-through'};
`

export const CommentsContainer = styled.section`
  margin-top: 6.4rem;
`

export const CommentsHeader = styled.header`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  p {
    font-size: 2.6rem;
  }
`

export const Comments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  margin-top: 2.4rem;
`

export const Comment = styled.div`
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 2.4rem;
`

export const CommentProfile = styled.div`
  position: relative;

  width: 12rem;
  height: 12rem;
`

export const CommentContent = styled.div`
  ${({ theme }) => css`
    padding: 3.2rem;
    background-color: ${theme.colors.gray.lighter};

    h3 {
      color: ${theme.colors.gray.dark};
      font-size: 2.4rem;
      font-weight: ${theme.font.weight.semibold};
    }

    small {
      display: block;
      margin-top: 0.4rem;
      margin-bottom: 2.4rem;

      font-size: 1.2rem;
      font-weight: ${theme.font.weight.light};
      color: #a0a0a9;
    }

    p {
      font-size: 2rem;
      color: ${theme.colors.gray.dark};
    }
  `}
`

export const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

export const Ratings = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`

type RatingProps = {
  shouldFill: boolean
}

export const Rating = styled.button<RatingProps>`
  background-color: transparent;
  border: none;

  svg {
    transition: all 0.1s linear;

    ${({ shouldFill }) => css`
      stroke: ${shouldFill && '#faaf00'};
      fill: ${shouldFill && '#faaf00'};
    `}

    &:hover {
      stroke: #faaf00;
      fill: #faaf00;
    }
  }
`

export const NotFound = styled.p`
  font-size: 1.6rem;
  margin-top: 2.4rem;
`
