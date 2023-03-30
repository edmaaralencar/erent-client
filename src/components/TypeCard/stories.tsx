import { Meta, StoryFn } from '@storybook/react'
import TypeCard from '.'

export default {
  title: 'UI/TypeCard',
  component: TypeCard,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 500 }}>
        <Story />
      </div>
    )
  ]
} as Meta

export const Default: StoryFn<typeof TypeCard> = args => <TypeCard {...args} />

Default.args = {
  name: 'Casas',
  description: 'Veja as casas mais requisitadas do mercado.',
  type: 'house',
  href: '/'
}
