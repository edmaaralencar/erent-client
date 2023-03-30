import { Meta, StoryFn } from '@storybook/react'
import ToastMessage from '.'

export default {
  title: 'ToastMessage',
  component: ToastMessage
} as Meta

export const Default: StoryFn<typeof ToastMessage> = (args) => <ToastMessage {...args} />
