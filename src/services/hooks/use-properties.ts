import { useQuery } from '@tanstack/react-query'
import { propertiesSchema } from '@/schemas/properties-schema'
import { api } from '../api'

type FunctionProps = {
  currentPage: number
  context?: boolean
}

export async function getProperties({ currentPage }: FunctionProps) {
  const response = await api({
    method: 'GET',
    endpoint: `/properties/all?page=${currentPage}`
  })

  const properties = propertiesSchema.parse(response.properties)

  return { properties, totalCount: response.totalCount }
}

export function useProperties({ currentPage }: FunctionProps) {
  return useQuery(
    ['properties', currentPage],
    () =>
      getProperties({
        currentPage
      }),
    {
      staleTime: 1000 * 60 * 10 // 10 minutes
    }
  )
}
