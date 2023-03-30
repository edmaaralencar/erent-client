import Link from 'next/link'
import { useRouter } from 'next/router'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { zodResolver } from '@hookform/resolvers/zod'

import { api } from '@/services/api'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Input from '@/components/Input'
import ToastMessage from '@/components/ToastMessage'

import * as S from '../../styles'
import { useState } from 'react'

const resetPasswordSchema = z.object({
  password: z.string().min(1, { message: 'Senha é obrigatória.' })
})

type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>

type ResetPasswordProps = {
  token: string
}

function ResetPassword({ token }: ResetPasswordProps) {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema)
  })

  async function handleResetPassword(data: ResetPasswordFormData) {
    setLoading(true)
    try {
      await api({
        method: 'POST',
        endpoint: '/users/reset-password',
        body: {
          password: data.password,
          token
        }
      })
      toast.success(
        <ToastMessage
          title="Senha trocada."
          description="Cheque seu e-mail para mais informações."
        />
      )
      setLoading(false)
      // router.push('/sign-in')
    } catch (error) {
      toast.error(
        <ToastMessage
          title="Ocorreu um erro."
          description="Tente novamente mais tarde."
        />
      )
      setLoading(false)
    }
  }

  return (
    <S.Wrapper onSubmit={handleSubmit(handleResetPassword)}>
      <Heading level={1} weight="medium">
        Digite sua senha nova
      </Heading>

      <S.InputContainer>
        <Input
          variant="outlined"
          label="Senha"
          type="password"
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <Button isSubmitting={loading} type="submit">Resetar senha</Button>
      </S.InputContainer>

      <Link href="/sign-in">Fazer login</Link>
    </S.Wrapper>
  )
}

export default ResetPassword
