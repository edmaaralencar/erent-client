import { Meta, StoryFn } from '@storybook/react'
import Stats from '.'

export default {
  title: 'UI/Stats',
  component: Stats
} as Meta

export const Default: StoryFn<typeof Stats> = () => <Stats />
