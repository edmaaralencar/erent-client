import { ReactElement } from 'react'
import { useRouter } from 'next/router'

import AppWrapper from '@/components/AppWrapper'
import ResetPassword from './components/ResetPassword'
import SendForgotPasswordEmail from './components/SendForgotPasswordEmail'

export default function ForgotPassword() {
  const {
    query: { token }
  } = useRouter()

  return (
    <>
      {token ? (
        <ResetPassword token={token as string} />
      ) : (
        <SendForgotPasswordEmail />
      )}
    </>
  )
}

ForgotPassword.getLayout = function getLayout(page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}
