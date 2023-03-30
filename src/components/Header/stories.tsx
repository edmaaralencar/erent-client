import {  Meta, StoryFn } from '@storybook/react'
import Header from '.'

export default {
  title: 'UI/Header',
  component: Header
} as Meta

export const Default: StoryFn = () => <Header />
