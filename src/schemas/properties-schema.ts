import { z } from 'zod'

export const propertySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  city: z.string(),
  region: z.string(),
  dailyPrice: z.number(),
  rooms: z.number(),
  bathrooms: z.number(),
  size: z.number(),
  capacity: z.number(),
  createdAt: z.string(),
  images: z
    .object({
      createdAt: z.string(),
      id: z.string(),
      filename: z.string(),
      url: z.string()
    })
    .array(),
  options: z
    .object({
      id: z.string(),
      name: z.string(),
      filename: z.string(),
      createdAt: z.string(),
      url: z.string()
    })
    .array()
})

export const propertiesSchema = z
  .object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string(),
    city: z.string(),
    region: z.string(),
    dailyPrice: z.number(),
    rooms: z.number(),
    bathrooms: z.number(),
    size: z.number(),
    capacity: z.number(),
    createdAt: z.string(),
    images: z
      .object({
        createdAt: z.string(),
        id: z.string(),
        filename: z.string(),
        url: z.string()
      })
      .array(),
    options: z
      .object({
        id: z.string(),
        name: z.string(),
        filename: z.string(),
        createdAt: z.string(),
        url: z.string()
      })
      .array()
  })
  .array()
  .transform(data =>
    data.map(property => ({
      ...property,
      dailyPrice: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(property.dailyPrice)
    }))
  )

export type IProperties = z.infer<typeof propertiesSchema>
export type IProperty = z.infer<typeof propertySchema>
