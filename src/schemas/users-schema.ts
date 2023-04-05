import { z } from 'zod'

export const usersSchema = z
  .object({
    id: z.string().uuid(),
    email: z.string(),
    name: z.string(),
    role: z.string(),
    avatar: z.string().nullable(),
    rentals: z.number()
  })
  .array()
