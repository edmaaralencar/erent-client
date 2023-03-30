import { ReactNode } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiLogOut } from 'react-icons/fi'

import { links } from './constants'
import { ITEM_ANIMATION } from '@/utils/animations'
import theme from '@/styles/theme'
import { useAuth } from '@/context/auth-context'

import Heading from '../Heading'

import * as S from './styles'

type AccountWrapperProps = {
  title: string
  children: ReactNode
}

function AccountWrapper({ title, children }: AccountWrapperProps) {
  const router = useRouter()
  const { signOut } = useAuth()

  return (
    <S.Wrapper>
      <Heading weight="medium">Minha conta</Heading>
      <S.Container>
        <S.Navbar variants={ITEM_ANIMATION} initial="hidden" animate="show">
          <ul>
            {links.map(link => (
              <Link key={link.name} href={link.path} passHref legacyBehavior>
                <S.NavLink active={router.pathname === link.path}>
                  {
                    <link.icon
                      className="icon"
                      size={22}
                      color={
                        router.pathname === link.path
                          ? theme.colors.white.main
                          : theme.colors.black.main
                      }
                    />
                  }
                  {link.name}
                </S.NavLink>
              </Link>
            ))}
            <S.NavLink onClick={signOut} active={false}>
              <button>
                <FiLogOut size={24} />
                Sair da plataforma
              </button>
            </S.NavLink>
          </ul>
        </S.Navbar>
        <S.Content variants={ITEM_ANIMATION} initial="hidden" animate="show">
          <h2>{title}</h2>
          {children}
        </S.Content>
      </S.Container>
    </S.Wrapper>
  )
}

export default AccountWrapper
