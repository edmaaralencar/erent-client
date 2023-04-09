import { GetServerSidePropsContext } from 'next'
import { destroyCookie, parseCookies } from 'nookies'

export class AuthTokenError extends Error {
  constructor() {
    super('Error with authentication token.')
  }
}

type ApiParams = {
  endpoint: string
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
  body?: Record<string, any> | FormData
  context?: GetServerSidePropsContext
  upload?: boolean
}

type Config = {
  method: 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH'
  body?: FormData | string
  headers: Record<string, string>
}

const url = process.env.NEXT_PUBLIC_API_URL

export async function api({
  endpoint,
  method,
  body,
  context,
  upload = false
}: ApiParams) {
  let cookies

  if (context) {
    cookies = parseCookies(context)
  } else {
    cookies = parseCookies()
  }

  const token = cookies['erent.token']

  const config: Config = {
    method,
    headers: {
      ...(!upload && { 'Content-Type': 'application/json' }),
      ...(token && { Authorization: `Bearer ${token}` })
    }
  }

  if (body) {
    if (upload) {
      config.body = body as FormData
    } else {
      config.body = JSON.stringify(body)
    }
  }

  return fetch(`${url}${endpoint}`, config).then(async response => {
    if (token) {
      if (response.status === 401 || response.status === 498) {
        destroyCookie({}, 'erent.token')
        return Promise.reject(new AuthTokenError())
      }
    }

    if (response.ok) {
      return await response.json()
    } else {
      return response.json().then(function (json) {
        return Promise.reject({
          status: response.status,
          ok: false,
          message: json.message
        })
      })
    }
  })
}
