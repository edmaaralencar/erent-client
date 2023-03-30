import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { destroyCookie, parseCookies } from 'nookies'
import jwtDecode from 'jwt-decode'

import { AuthTokenError } from '@/services/api'

type WithSSRAuthOption = {
  isAdmin?: boolean
}

export function withSSRAuth(
  fn: GetServerSideProps,
  option?: WithSSRAuthOption
) {
  return async (ctx: GetServerSidePropsContext) => {
    const cookies = parseCookies(ctx)
    const token = cookies['erent.token']

    if (!token) {
      return {
        redirect: {
          destination: '/sign-in',
          permanent: false
        }
      }
    }

    if (option) {
      const user = jwtDecode<{ isAdmin: boolean }>(token)

      if (!user?.isAdmin) {
        return {
          redirect: {
            destination: '/',
            permanent: false
          }
        }
      }
    }

    try {
      return await fn(ctx)
    } catch (error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(ctx, 'erent.token')

        return {
          redirect: {
            destination: '/sign-in',
            permanent: false
          }
        }
      }

      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
  }
}
