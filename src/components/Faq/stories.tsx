import { Meta, StoryFn } from '@storybook/react'
import Faq from '.'

export default {
  title: 'Faq',
  component: Faq
} as Meta

export const Default: StoryFn<typeof Faq> = () => <Faq />
