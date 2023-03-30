import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import Button from '@/components/Button'
import Heading from '@/components/Heading'
import Input from '@/components/Input'

import * as S from '../../styles'
import { toast } from 'react-toastify'
import ToastMessage from '@/components/ToastMessage'
import { api } from '@/services/api'
import { useState } from 'react'

const sendForgotPasswordEmailSchema = z.object({
  email: z
    .string()
    .email({ message: 'E-mail inválido.' })
    .min(1, { message: 'E-mail é obrigatório.' })
})

type SendForgotPasswordFormData = z.infer<typeof sendForgotPasswordEmailSchema>

function SendForgotPasswordEmail() {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SendForgotPasswordFormData>({
    resolver: zodResolver(sendForgotPasswordEmailSchema)
  })

  async function handleSendForgotEmail(data: SendForgotPasswordFormData) {
    setLoading(true)
    try {
      await api({
        method: 'POST',
        endpoint: '/users/forgot-password',
        body: {
          email: data.email
        }
      })
      toast.success('Um e-mail de resetar a senha foi enviado para seu e-mail.')
      setLoading(false)
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
    <S.Wrapper onSubmit={handleSubmit(handleSendForgotEmail)}>
      <Heading level={1} weight="medium">
        Você esqueceu sua senha?
      </Heading>
      <S.Description>
        Digite seu e-mail que você está usando para sua conta e nós enviaremos
        para o seu um email um link de resetar a senha.
      </S.Description>

      <S.InputContainer>
        <Input
          variant="outlined"
          label="E-mail"
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <Button isSubmitting={loading} type="submit">Enviar email de reset</Button>
      </S.InputContainer>

      <Link href="/sign-in">Fazer login</Link>
    </S.Wrapper>
  )
}

export default SendForgotPasswordEmail
