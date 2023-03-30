import { Meta, StoryFn } from '@storybook/react'
import NavDropdown from '.'
import * as Dropdown from '@radix-ui/react-dropdown-menu'

export default {
  title: 'UI/NavDropdown',
  component: NavDropdown,
  decorators: [
    Story => (
      <Dropdown.Root>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <Dropdown.Trigger>Abrir</Dropdown.Trigger>
          <Story />
        </div>
      </Dropdown.Root>
    )
  ]
} as Meta

export const Default: StoryFn<typeof NavDropdown> = (args) => <NavDropdown {...args} />
