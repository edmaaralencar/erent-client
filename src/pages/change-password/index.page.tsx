import { ReactElement } from 'react'

import AccountWrapper from '@/components/AccountWrapper'
import AppWrapper from '@/components/AppWrapper'

import * as S from './styles'
import Input from '@/components/Input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Button from '@/components/Button'

const changePasswordSchema = z.object({
  old_password: z.string().min(6, { message: 'Senha atual é obrigatória.' }),
  new_password: z.string().min(6, { message: 'Senha nova é obrigatória.' })
})

type ChangePasswordFormData = z.infer<typeof changePasswordSchema>

export default function ChangePassword() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<ChangePasswordFormData>({})

  function handleChangePassword(data: ChangePasswordFormData) {
    console.log(data)
  }

  return (
    <AccountWrapper title="Trocar senha">
      <S.Wrapper onSubmit={handleSubmit(handleChangePassword)}>
        <S.InputContainer>
          <Input
            type="password"
            variant="outlined"
            label="Senha antiga"
            errorMessage={errors.old_password?.message}
            {...register('old_password')}
          />
          <Input
            type="password"
            variant="outlined"
            label="Senha nova"
            errorMessage={errors.new_password?.message}
            {...register('new_password')}
          />
        </S.InputContainer>
        <Button size="large" type="submit">
          Salvar alterações
        </Button>
      </S.Wrapper>
    </AccountWrapper>
  )
}

ChangePassword.getLayout = function (page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}
