import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type IconButtonProps = {
  variant?: 'primary' | 'white'
  icon: JSX.Element
  as?: React.ElementType
} & ButtonTypes

const IconButton: React.ForwardRefRenderFunction<
  S.WrapperProps,
  IconButtonProps
> = ({ variant = 'primary', icon, ...props }, ref) => {
  return (
    <S.Wrapper variant={variant} {...props} ref={ref}>
      {!!icon && icon}
    </S.Wrapper>
  )
}

export default forwardRef(IconButton)
