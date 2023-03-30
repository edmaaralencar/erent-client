import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { useAuth } from '@/context/auth-context'

import AuthForm from '@/components/AuthForm'
import Input from '@/components/Input'
import { useForm } from 'react-hook-form'

const signInSchema = z.object({
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 dígitos.' })
})

type SignInFormData = z.infer<typeof signInSchema>

export default function SignIn() {
  const { signIn } = useAuth()

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema)
  })

  async function handleSignIn(data: SignInFormData) {
    await signIn(data)
  }

  return (
    <AuthForm
      onSubmit={handleSubmit(handleSignIn)}
      title="Faça seu login"
      type="login"
    >
      <Input
        variant="outlined"
        label="E-mail"
        errorMessage={errors.email?.message}
        {...register('email')}
      />
      <Input
        type="password"
        variant="outlined"
        label="Senha"
        {...register('password')}
        errorMessage={errors?.password?.message}
      />
    </AuthForm>
  )
}
