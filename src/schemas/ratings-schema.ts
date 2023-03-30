import { z } from 'zod'

export const ratingsSchema = z
  .object({
    id: z.string().uuid(),
    title: z.string(),
    description: z.string(),
    value: z.number(),
    user: z.string(),
    createdAt: z.coerce.date()
  })
  .array()
