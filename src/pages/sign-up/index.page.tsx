import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useAuth } from '@/context/auth-context'

import AuthForm from '@/components/AuthForm'
import Input from '@/components/Input'

const signUpSchema = z.object({
  name: z.string().min(1, { message: 'Informe o nome.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  password: z
    .string()
    .min(6, { message: 'A senha deve ter pelo menos 6 dígitos.' })
})

type SignUpFormData = z.infer<typeof signUpSchema>

export default function SignUp() {
  const {signUp} = useAuth()
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading }
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema)
  })

  async function handleSignUp(data: SignUpFormData) {
    await signUp(data)
  }

  return (
    <AuthForm
      onSubmit={handleSubmit(handleSignUp)}
      title="Faça seu cadastro"
      type="register"
    >
      <Input
        variant="outlined"
        label="Nome"
        errorMessage={errors.name?.message}
        {...register('name')}
      />
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
        errorMessage={errors.password?.message}
        {...register('password')}
      />
    </AuthForm>
  )
}
