import { Meta, StoryFn } from '@storybook/react'
import Footer from '.'

export default {
  title: 'UI/Footer',
  component: Footer
} as Meta

export const Default: StoryFn<typeof Footer> = () => <Footer />
