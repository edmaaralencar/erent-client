import { Meta, StoryFn } from '@storybook/react'
import ModalDelete from '.'
import * as Dialog from '@radix-ui/react-dialog'

import img from '../../../public/error.png'

export default {
  title: 'Modal/ModalDelete',
  component: ModalDelete,
  decorators: [
    Story => (
      <Dialog.Root>
        <Dialog.Trigger>Abrir</Dialog.Trigger>

        <Story />
      </Dialog.Root>
    )
  ]
} as Meta

export const Default: StoryFn<typeof ModalDelete> = (args) => <ModalDelete {...args} />