import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  FiAperture,
  FiHome,
  FiLogOut,
  FiUser,
  FiBookOpen,
  FiCopy
} from 'react-icons/fi'
import { BiArrowBack } from 'react-icons/bi'

import { useAuth } from '@/context/auth-context'

import * as S from './styles'
import Image from 'next/image'

function Sidebar() {
  const router = useRouter()
  const { signOut } = useAuth()

  return (
    <S.Wrapper>
      <S.NavList>
        <Link href="/dashboard" passHref legacyBehavior>
          <S.NavLink
            className={router.pathname === '/dashboard' ? 'active' : ''}
          >
            <FiAperture size={24} color="#FFFFFF" />
          </S.NavLink>
        </Link>
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
