import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import * as Dropdown from '@radix-ui/react-dropdown-menu'
import { FiAperture, FiHome, FiLogOut, FiUser } from 'react-icons/fi'

import { CONTAINER_ANIMATION, ITEM_ANIMATION } from './animations'
import { useAuth } from '@/context/auth-context'

import * as S from './styles'

type NavDropdownProps = {
  isOpen: boolean
}

function NavDropdown({ isOpen }: NavDropdownProps) {
  const { signOut, user } = useAuth()

  function onClick() {
    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <Dropdown.Portal forceMount>
          <Dropdown.Content forceMount asChild>
            <S.Content
              variants={CONTAINER_ANIMATION}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <Dropdown.Item>
                <Link href="/profile" passHref legacyBehavior>
                  <S.Link onClick={onClick} variants={ITEM_ANIMATION}>
                    <FiUser size={20} color="#18191F" />
                    <span>Minha conta</span>
                  </S.Link>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link href="/rentals" passHref legacyBehavior>
                  <S.Link onClick={onClick} variants={ITEM_ANIMATION}>
                    <FiHome size={20} color="#18191F" />
                    <span>Aluguéis</span>
                  </S.Link>
                </Link>
              </Dropdown.Item>
              {user.isAdmin && (
                <Dropdown.Item>
                  <Link href="/dashboard/properties" passHref legacyBehavior>
                    <S.Link onClick={onClick} variants={ITEM_ANIMATION}>
                      <FiAperture size={20} color="#18191F" />
                      <span>Dashboard</span>
                    </S.Link>
                  </Link>
                </Dropdown.Item>
              )}
              <Dropdown.Item>
                <S.Link
                  variants={ITEM_ANIMATION}
                  as={motion.button}
                  onClick={signOut}
                >
                  <FiLogOut size={20} color="#18191F" />

                  <span>Sair da plataforma</span>
                </S.Link>
              </Dropdown.Item>
            </S.Content>
          </Dropdown.Content>
        </Dropdown.Portal>
      )}
    </AnimatePresence>
  )
}

export default NavDropdown
