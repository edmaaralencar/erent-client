import { FiHome, FiLock, FiUser } from 'react-icons/fi'

export const links = [
  {
    name: 'Minha conta',
    icon: FiUser,
    path: '/profile'
  },
  {
    name: 'Meus aluguéis',
    icon: FiHome,
    path: '/rentals'
  },
  {
    name: 'Trocar senha',
    icon: FiLock,
    path: '/change-password'
  }
]
