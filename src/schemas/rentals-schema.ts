import { z } from 'zod'

export const getAllRentalsSchema = z
  .object({
    id: z.string().uuid(),
    user: z.string(),
    checkIn: z.coerce.date(),
    checkout: z.coerce.date(),
    total: z.number(),
    property: z.object({
      name: z.string()
    })
  })
  .array()

export const getUserRentalsSchema = z
  .object({
    id: z.string().uuid(),
    checkIn: z.coerce.date(),
    checkout: z.coerce.date(),
    total: z.number(),
    property: z.object({
      id: z.string(),
      name: z.string(),
      image_url: z.string()
    })
  })
  .array()
