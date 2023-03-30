import { Meta, StoryFn } from '@storybook/react'
import Hero from '.'

export default {
  title: 'Hero',
  component: Hero
} as Meta

export const Default: StoryFn<typeof Hero> = () => <Hero />
