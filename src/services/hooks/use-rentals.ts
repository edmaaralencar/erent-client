import { getAllRentalsSchema } from '@/schemas/rentals-schema'
import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

export async function getRentals() {
  const response = await api({
    method: 'GET',
    endpoint: '/rentals/all'
  })
  
  const rentals = getAllRentalsSchema.parse(response.rentals)

  return { rentals, totalCount: response.totalCount }
}

export function useRentals() {
  return useQuery(['rentals'], () => getRentals(), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}
