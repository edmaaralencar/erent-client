import { BaseSyntheticEvent, ReactNode } from 'react'
import Link from 'next/link'

import Button from '../Button'

import * as S from './styles'

export type FormWrapperProps = {
  children: ReactNode
  cancelHref: string
  onSubmit: (
    e?: BaseSyntheticEvent<object, any, any> | undefined
  ) => Promise<void>
  isSubmitting: boolean
}

function FormWrapper({
  children,
  cancelHref,
  onSubmit,
  isSubmitting
}: FormWrapperProps) {
  return (
    <S.Wrapper onSubmit={onSubmit}>
      {children}
      <S.ButtonWrapper>
        <Link href={cancelHref} passHref legacyBehavior>
          <Button as="a" variant="outlined" size="large">
            Cancelar
          </Button>
        </Link>
        <Button
          isSubmitting={isSubmitting}
          type="submit"
          variant="primary"
          size="large"
        >
          Confirmar
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  )
}

export default FormWrapper
