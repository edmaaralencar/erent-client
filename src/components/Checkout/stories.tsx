import { Meta, StoryFn } from '@storybook/react'
import Checkout from '.'

export default {
  title: 'Checkout',
  component: Checkout
} as Meta

export const Default: StoryFn<typeof Checkout> = (args) => <Checkout {...args} />
