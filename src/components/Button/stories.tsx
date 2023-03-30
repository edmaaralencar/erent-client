import { Meta, StoryFn } from '@storybook/react'
import Button from '.'

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    href: {
      type: 'string'
    },
    children: {
      type: 'string'
    },
    variant: {
      options: ['primary', 'outlined', 'success', 'error'],
      control: { type: 'select' }
    },
    size: {
      control: {
        type: 'select'
      },
      options: ['small', 'medium', 'large']
    },
    isSubmitting: {
      type: 'boolean'
    }
  }
} as Meta

export const Default: StoryFn<typeof Button> = args => <Button {...args} />

Default.args = {
  children: 'Veja mais'
}
