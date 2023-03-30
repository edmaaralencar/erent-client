import { Meta, StoryFn } from '@storybook/react'
import { FiTrash } from 'react-icons/fi'
import IconButton from '.'

export default {
  title: 'IconButton',
  component: IconButton,
  args: {
    variant: {
      options: ['primary', 'outlined', 'success', 'error'],
      control: { type: 'select' }
    }
  }
} as Meta

export const Default: StoryFn<typeof IconButton> = args => (
  <IconButton {...args} />
)

Default.args = {
  variant: 'primary',
  icon: <FiTrash size={22} className="icon" />
}
