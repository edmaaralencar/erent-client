import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiChevronDown } from 'react-icons/fi'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

import Button from '../Button'
import NavDropdown from '../NavDropdown'

import { NAV_LIST_ANIMATION } from './animations'
import { ITEM_ANIMATION } from '../../utils/animations'
import { links } from './constants'
import { useAuth } from '@/context/auth-context'

import * as S from './styles'

function Header() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  return (
    <Dropdown.Root open={isDropdownOpen} onOpenChange={setIsDropdownOpen}>
      <S.Wrapper>
        <S.Container>
          <Link href="/">
            <S.AnimatedWrapper
              variants={ITEM_ANIMATION}
              initial="hidden"
              animate="show"
            >
              <Image src="/logo.svg" alt="Logo" width={100} height={24} />
            </S.AnimatedWrapper>
          </Link>

          <S.NavList
            variants={NAV_LIST_ANIMATION}
            initial="hidden"
            animate="show"
          >
            {links.map(link => (
              <S.NavLinkWrapper
                whileHover={{ y: -3 }}
                whileTap={{ y: 0 }}
                variants={ITEM_ANIMATION}
                key={link.href}
              >
                <Link key={link.href} href={link.href} passHref legacyBehavior>
                  <S.NavLink active={Boolean(router.pathname === link.href.slice(0, link.href.indexOf('?')))}>
                    {link.label}
                  </S.NavLink>
                </Link>
              </S.NavLinkWrapper>
            ))}
          </S.NavList>

          {isAuthenticated ? (
            <S.Profile
              variants={ITEM_ANIMATION}
              initial="hidden"
              animate="show"
              transition={{
                delay: 0.9
              }}
            >
              <div className="image">
                <Image src={'/avatar.png'} alt="Imagem do usuário" fill />
              </div>
              <span>{user?.name}</span>
              <S.DropdownTrigger>
                <FiChevronDown className="cursor" size={24} color="#18191F" />
              </S.DropdownTrigger>
              <NavDropdown isOpen={isDropdownOpen} />
            </S.Profile>
          ) : (
            <Link href="/sign-in" passHref legacyBehavior>
              <S.AnimatedWrapper
                variants={ITEM_ANIMATION}
                initial="hidden"
                animate="show"
                className="teste"
                transition={{
                  delay: 0.9
                }}
              >
                <Button as="a" size="small">
                  Login
                </Button>
              </S.AnimatedWrapper>
            </Link>
          )}
        </S.Container>
      </S.Wrapper>
    </Dropdown.Root>
  )
}

export default Header
