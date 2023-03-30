import { Meta, StoryFn } from '@storybook/react'
import PropertyCard from '.'

export default {
  title: 'UI/PropertyCard',
  component: PropertyCard
} as Meta

export const Default: StoryFn<typeof PropertyCard> = args => (
  <PropertyCard {...args} />
)

Default.args = {
  id: '1',
  name: 'Casa na praia',
  city: 'Rio de Janeiro',
  daily_price: 400,
  rooms: 2,
  bathrooms: 2,
  size: 130,
  image: '/image.png'
}
