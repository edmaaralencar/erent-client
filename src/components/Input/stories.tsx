import { Meta, StoryFn } from '@storybook/react'
import Input from '.'

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    label: {
      type: 'string'
    },
    variant: {
      options: ['normal', 'outlined'],
      control: { type: 'select' }
    }
  }
} as Meta

export const Default: StoryFn<typeof Input> = args => <Input {...args} />

Default.args = {
  label: 'Nome da propriedade',
  variant: 'normal'
}
