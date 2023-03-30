import { Meta, StoryFn } from '@storybook/react'
import AccountWrapper from '.'

export default {
  title: 'Wrapper/AccountWrapper',
  component: AccountWrapper
} as Meta

export const Default: StoryFn<typeof AccountWrapper> = args => (
  <AccountWrapper {...args} />
)
