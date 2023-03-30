import { Meta, StoryFn } from '@storybook/react'
import TableLoder from '.'

export default {
  title: 'TableLoder',
  component: TableLoder
} as Meta

export const Default: StoryFn<typeof TableLoder> = () => <TableLoder />
