import { MdErrorOutline } from 'react-icons/md'

import {
  forwardRef,
  ForwardRefRenderFunction,
  InputHTMLAttributes
} from 'react'
import * as S from './styles'

export type InputProps = {
  variant?: 'normal' | 'outlined'
  label: string
  errorMessage: string | undefined
  name: string
} & InputHTMLAttributes<HTMLInputElement>

const Input: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { variant = 'normal', label, name, errorMessage, ...rest },
  ref
) => {
  return (
    <S.Wrapper variant={variant} error={!!errorMessage}>
      <label htmlFor={name}>{label}</label>
      <input name={name} ref={ref} {...rest} />

      {!!errorMessage && (
        <span className="error">
          <MdErrorOutline size={18} color="#C10000" />
          {errorMessage}
        </span>
      )}
    </S.Wrapper>
  )
}

export default forwardRef(Input)
