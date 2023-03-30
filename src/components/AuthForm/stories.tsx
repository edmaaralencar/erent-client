import { Meta, StoryFn } from '@storybook/react'
import AuthForm from '.'

export default {
  title: 'Form/AuthForm',
  component: AuthForm
} as Meta

export const Default: StoryFn<typeof AuthForm> = args => (
  <AuthForm {...args} />
)
