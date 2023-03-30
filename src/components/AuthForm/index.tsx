import Image from 'next/image'
import Link from 'next/link'
import { BaseSyntheticEvent, ReactNode } from 'react'
import Button from '../Button'
import Heading from '../Heading'
import * as S from './styles'

export type AuthFormProps = {
  title: string
  children: ReactNode
  type: 'login' | 'register'
  onSubmit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>
}

function AuthForm({ onSubmit, title, type, children }: AuthFormProps) {
  return (
    <S.Wrapper>
      <S.Logo href="/">
        <S.LogoWrapper
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Image src="/logo.svg" alt="Logo" width={100} height={24} />
        </S.LogoWrapper>
      </S.Logo>
      <S.ImageContainer
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }}
      >
        <Image src="/image.png" alt="Imagem de casa" fill />
      </S.ImageContainer>
      <S.FormWrapper
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5
          }
        }}
        onSubmit={onSubmit}
      >
        <S.Container>
          <Heading weight="medium" size="medium">
            {title}
          </Heading>
          <S.InputContainer>{children}</S.InputContainer>
          <S.ButtonContainer>
            <Button size="small">
              {type === 'login' ? 'Entrar' : 'Criar conta'}
            </Button>
            <Button
              size="small"
              variant="outlined"
              as="a"
              href={type == 'login' ? '/sign-up' : '/sign-in'}
            >
              {type === 'login' ? 'Cria sua conta' : 'Faça login'}
            </Button>
            <p>ou</p>
            <Link href="/forgot-password" passHref legacyBehavior>
              <S.ForgotPasswordLink>
                Esqueceu sua senha? Clique aqui
              </S.ForgotPasswordLink>
            </Link>
          </S.ButtonContainer>
        </S.Container>
      </S.FormWrapper>
    </S.Wrapper>
  )
}

export default AuthForm
