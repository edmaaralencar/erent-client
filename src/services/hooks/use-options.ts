import { useQuery } from '@tanstack/react-query'
import { z } from 'zod'
import { api } from '../api'

const getOptionsSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string(),
    filename: z.string(),
    createdAt: z.string(),
    imageUrl: z.string()
  })
  .array()

export async function getOptions() {
  const response = await api({
    method: 'GET',
    endpoint: '/options'
  })

  const options = getOptionsSchema.parse(response.options)

  return { options }
}

export function useOptions() {
  return useQuery(['options'], () => getOptions(), {
    staleTime: 1000 * 60 * 10 // 10 minutes
  })
}
