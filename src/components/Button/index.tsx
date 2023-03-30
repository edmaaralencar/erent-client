import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef,
  ForwardRefRenderFunction,
  ReactNode
} from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'success' | 'error' | 'outlined'
  isSubmitting?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    children,
    size = 'medium',
    variant = 'primary',
    isSubmitting = false,
    ...rest
  },
  ref
) => {
  return (
    <S.Wrapper
      size={size}
      variant={variant}
      isSubmitting={isSubmitting}
      ref={ref}
      {...rest}
    >
      {!!children && <span>{children}</span>}
      {!!isSubmitting && <div className="spinner"></div>}
    </S.Wrapper>
  )
}

export default forwardRef(Button)
