import { Meta, StoryFn } from '@storybook/react'
import DashboardWrapper from '.'

export default {
  title: 'Wrapper/DashboardWrapper',
  component: DashboardWrapper
} as Meta

export const Default: StoryFn<typeof DashboardWrapper> = (args) => <DashboardWrapper {...args} />
