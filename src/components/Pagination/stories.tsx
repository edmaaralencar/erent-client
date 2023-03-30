import { Meta, StoryFn } from '@storybook/react'
import Pagination from '.'

export default {
  title: 'Pagination',
  component: Pagination
} as Meta

export const Default: StoryFn<typeof Pagination> = args => (
  <Pagination {...args} />
)
