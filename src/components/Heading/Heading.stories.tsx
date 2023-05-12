import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Heading } from './Heading'

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    align: {
      defaultValue: 'left',
    },
    as: {
      defaultValue: 'h1',
    },
  },
} as ComponentMeta<typeof Heading>

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args}>Heading</Heading>

export const Primary = Template.bind({})
