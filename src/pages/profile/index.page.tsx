import { ReactElement, useRef, useState } from 'react'

import AccountWrapper from '@/components/AccountWrapper'
import AppWrapper from '@/components/AppWrapper'

import * as S from './styles'
import { useForm } from 'react-hook-form'
import Input from '@/components/Input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Button from '@/components/Button'
import Image from 'next/image'
import { useAuth } from '@/context/auth-context'
import { api } from '@/services/api'
import { withSSRAuth } from '@/utils/with-ssr-auth'

const updateProfileSchema = z
  .object({
    email: z.string().optional(),
    name: z.string().optional()
  })
  .refine(data => Boolean(data))

type UpdateProfileFormData = z.infer<typeof updateProfileSchema>

export default function Profile() {
  const { user, updateProfile } = useAuth()
  const profileImageRef = useRef<any>(null)
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<UpdateProfileFormData>({
    resolver: zodResolver(updateProfileSchema)
  })

  function handleUpdateProfile(data: UpdateProfileFormData) {
    console.log(data)
  }

  async function handleChooseProfileImage() {
    const formData = new FormData()

    formData.append('image', profileImageRef?.current?.files[0])

    const { avatar } = await api({
      endpoint: '/avatar',
      method: 'PUT',
      upload: true,
      body: formData
    })

    updateProfile({ avatar })
  }

  return (
    <AccountWrapper title="Perfil">
      <S.Wrapper onSubmit={handleSubmit(handleUpdateProfile)}>
        <S.InputWrapper>
          <label className="upload-label" htmlFor="upload-buton">
            Adicione/troque sua foto de perfil clicando na imagem
          </label>
          <input
            multiple
            ref={profileImageRef}
            onChange={handleChooseProfileImage}
            type="file"
            id="upload-button"
            hidden
          />
          <label className="upload-button" htmlFor="upload-button">
            <Image
              src={user.avatar ? user.avatar : '/avatar.png'}
              alt="Imagem de perfil do usuário"
              width={80}
              height={80}
              style={{
                borderRadius: 9999
              }}
            />
          </label>
        </S.InputWrapper>
        <S.InputContainer>
          <Input
            variant="outlined"
            label="Nome"
            errorMessage={errors.name?.message}
            {...register('name')}
          />
          <Input
            variant="outlined"
            label="Email"
            errorMessage={errors.email?.message}
            {...register('email')}
          />
        </S.InputContainer>
        <Button size="large" type="submit">
          Salvar alterações
        </Button>
      </S.Wrapper>
    </AccountWrapper>
  )
}

export const getServerSideProps = withSSRAuth(async ctx => {
  return {
    props: {}
  }
})

Profile.getLayout = function (page: ReactElement) {
  return <AppWrapper>{page}</AppWrapper>
}
