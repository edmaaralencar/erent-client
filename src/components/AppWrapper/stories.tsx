import { Meta, StoryFn } from '@storybook/react'
import AppWrapper from '.'

export default {
  title: 'Wrapper/AppWrapper',
  component: AppWrapper
} as Meta

export const Default: StoryFn<typeof AppWrapper> = args => (
  <AppWrapper {...args} />
)
