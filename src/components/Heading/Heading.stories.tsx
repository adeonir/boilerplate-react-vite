import type { Meta, StoryObj } from '@storybook/react'

import { Heading } from './Heading'

const meta = {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Heading>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Heading',
    align: 'left',
    as: 'h1',
  },
}
