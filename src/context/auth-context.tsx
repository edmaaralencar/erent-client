import ToastMessage, { renderContent } from '@/components/ToastMessage'
import { api } from '@/services/api'
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { toast } from 'react-toastify'

type User = {
  name: string
  email: string
  avatar: string
  isAdmin: boolean
}

type SignInCredentials = {
  email: string
  password: string
}

type SignUpCredentials = {
  name: string
  email: string
  password: string
}

type UpdateProfileData = {
  // name: string
  avatar: string
  // email: string
}

type AuthProviderProps = {
  children: ReactNode
}

type AuthContextData = {
  signIn: (credentials: SignInCredentials) => Promise<void>
  signUp: (credentials: SignUpCredentials) => Promise<void>
  signOut: () => void
  updateProfile: (data: UpdateProfileData) => Promise<void>
  user: User
  isAuthenticated: boolean
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const { 'erent.token': token } = parseCookies()

    if (token) {
      api({
        method: 'GET',
        endpoint: '/users/me'
      })
        .then(response => {
          const { name, email, avatar, isAdmin } = response.user
          setIsLoading(false)
          setUser({ name, email, avatar, isAdmin })
          setIsAuthenticated(true)
        })
        .catch(() => {
          setIsLoading(false)
          signOut()
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [])

  function signOut() {
    destroyCookie({}, 'erent.token')
    setUser({} as User)
    setIsAuthenticated(false)

    Router.push('/sign-in')
  }

  async function signIn(credentials: SignInCredentials) {
    try {
      const { token, user } = await api({
        endpoint: '/users/sessions',
        method: 'POST',
        body: {
          email: credentials.email,
          password: credentials.password
        }
      })

      setCookie(undefined, 'erent.token', token, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: '/'
      })

      setUser({
        name: user.name,
        avatar: user.avatar,
        email: user.email,
        isAdmin: user.isAdmin
      })
      setIsAuthenticated(true)

      toast.success(
        <ToastMessage
          title="Login realizado com sucesso."
          description="Você será redirecionado em 3 segundos"
        />,
        {
          autoClose: 3000
        }
      )

      setTimeout(() => {
        Router.push('/')
      }, 3000)
    } catch (error: any) {
      if (error?.status == 401) {
        toast.error(
          <ToastMessage
            title="Credenciais inválidas."
            description="Tente novamente."
          />
        )
      }
    }
  }

  async function signUp(credentials: SignUpCredentials) {
    try {
      await api({
        endpoint: '/users',
        method: 'POST',
        body: {
          name: credentials.name,
          email: credentials.email,
          password: credentials.password
        }
      })

      toast.success(
        <ToastMessage
          title="Conta criada com sucesso."
          description="Você será redirecionado para a tela de login."
        />,
        {
          autoClose: 2000
        }
      )

      setTimeout(() => {
        Router.push('/sign-in')
      }, 2000)
    } catch (error: any) {
      if (error?.status == 409) {
        toast.error(
          <ToastMessage
            title="Ocorreu um erro."
            description="Tente novamente."
          />
        )
      }
    }
  }

  async function updateProfile(data: UpdateProfileData) {
    setUser(state => ({
      ...state,
      ...data
    }))
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signUp,
        signOut,
        updateProfile
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
