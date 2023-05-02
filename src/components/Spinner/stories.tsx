import { Meta, StoryFn } from '@storybook/react'
import Spinner from '.'

export default {
  title: 'UI/Spinner',
  component: Spinner
} as Meta

export const Default: StoryFn<typeof Spinner> = () => <Spinner />
