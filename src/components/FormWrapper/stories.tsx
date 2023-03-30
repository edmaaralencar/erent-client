import { Meta, StoryFn } from '@storybook/react'
import FormWrapper from '.'

export default {
  title: 'FormWrapper',
  component: FormWrapper
} as Meta

export const Default: StoryFn<typeof FormWrapper> = (args) => <FormWrapper {...args} />
