import { Meta, StoryFn } from '@storybook/react'
import FileInput from '.'

export default {
  title: 'FileInput',
  component: FileInput
} as Meta

export const Default: StoryFn<typeof FileInput> = (args) => <FileInput {...args} />
