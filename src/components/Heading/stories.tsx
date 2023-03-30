import theme from '@/styles/theme'
import { Meta, StoryFn } from '@storybook/react'
import { ReactNode } from 'react'
import Heading from '.'

export default {
  title: 'Typography/Heading',
  component: Heading
} as Meta

export const Default: StoryFn<typeof Heading> = (args) => <Heading {...args} />

Default.args = {
  children: 'Título'
}
