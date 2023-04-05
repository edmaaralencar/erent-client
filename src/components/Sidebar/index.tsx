import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FiHome, FiLogOut, FiUser, FiBookOpen, FiCopy } from 'react-icons/fi'

import { useAuth } from '@/context/auth-context'

import * as S from './styles'

function Sidebar() {
  const router = useRouter()
  const { signOut } = useAuth()

  return (
    <S.Wrapper>
      <S.NavList>
        <Link href="/dashboard/properties" passHref legacyBehavior>
          <S.NavLink
            className={
              router.pathname === '/dashboard/properties' ? 'active' : ''
            }
          >
            <FiHome size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        <Link href="/dashboard/users" passHref legacyBehavior>
          <S.NavLink
            className={router.pathname === '/dashboard/users' ? 'active' : ''}
          >
            <FiUser size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        <Link href="/dashboard/rentals" passHref legacyBehavior>
          <S.NavLink
            className={router.pathname === '/dashboard/rentals' ? 'active' : ''}
          >
            <FiBookOpen size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        <Link href="/dashboard/options" passHref legacyBehavior>
          <S.NavLink
            className={router.pathname === '/dashboard/options' ? 'active' : ''}
          >
            <FiCopy size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
        {/* <S.NavButton className="nav-button" onClick={signOut} as="button">
          <FiLogOut size={24} color="#FFFFFF" />
        </S.NavButton> */}
      </S.NavList>
      <S.NavButton onClick={signOut} as="button">
        <FiLogOut size={24} color="#FFFFFF" />
      </S.NavButton>
      <Link href="/" passHref legacyBehavior>
        <S.NavLogo as="a">
          <Image src="/logo-white.png" alt="Logo" width={64} height={24} />
        </S.NavLogo>
      </Link>
    </S.Wrapper>
  )
}

export default Sidebar
