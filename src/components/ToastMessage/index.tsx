import { ToastContentProps } from 'react-toastify'
import * as S from './styles'

type ToastMessageProps = {
  title: string
  description: string
} & Partial<ToastContentProps>

export function renderContent(title: string, description: string): JSX.Element {
  return (
    <S.Wrapper>
      <strong>{title}</strong>
      <span>{description}</span>
    </S.Wrapper>
  )
}

function ToastMessage({
  closeToast,
  toastProps,
  title,
  description
}: ToastMessageProps) {
  return (
    <S.Wrapper>
      <strong>{title}</strong>
      <span>{description}</span>
    </S.Wrapper>
  )
}

export default ToastMessage
