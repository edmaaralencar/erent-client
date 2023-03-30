import { Meta, StoryFn } from '@storybook/react'
import SearchPropertyBox from '.'

export default {
  title: 'SearchPropertyBox',
  component: SearchPropertyBox
} as Meta

export const Default: StoryFn<typeof SearchPropertyBox> = () => <SearchPropertyBox />
