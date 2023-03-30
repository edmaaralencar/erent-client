import styled, { css } from 'styled-components'

type WrapperProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6
  size: 'medium' | 'large'
  weight: 'medium' | 'semibold' | 'bold'
}

export const Wrapper = styled('h1').attrs<WrapperProps>(({ level }) => ({
  as: `h${level}`
}))<WrapperProps>`
  ${({ theme, size, color, weight }) => css`
    font-size: min(${theme.font.sizes[size]}, 8vw);
    color: ${theme.colors.text};
    font-weight: ${theme.font.weight[weight]};
  `}
`
