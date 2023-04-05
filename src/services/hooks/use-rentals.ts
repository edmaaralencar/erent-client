import { getAllRentalsSchema } from '@/schemas/rentals-schema'
import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

type FunctionProps = {
  currentPage: number
}

export async function getRentals({ currentPage }: FunctionProps) {
  const response = await api({
    method: 'GET',
    endpoint: `/rentals/all?page=${currentPage}`
  })

  const rentals = getAllRentalsSchema.parse(response.rentals)

  return { rentals, totalCount: response.totalCount }
}

export function useRentals({ currentPage }: FunctionProps) {
  return useQuery(['rentals'], () => getRentals({ currentPage }), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}
