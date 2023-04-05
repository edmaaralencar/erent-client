import { usersSchema } from '@/schemas/users-schema'
import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

type FunctionProps = {
  currentPage: number
}

export async function getUsers({ currentPage }: FunctionProps) {
  const response = await api({
    method: 'GET',
    endpoint: `/users?page=${currentPage}`
  })

  const users = usersSchema.parse(response.users)

  return { users, totalCount: response.totalCount }
}

export function useUsers({ currentPage }: FunctionProps) {
  return useQuery(['users', currentPage], () => getUsers({ currentPage }), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}
