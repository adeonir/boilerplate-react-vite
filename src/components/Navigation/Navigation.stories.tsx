import { ComponentMeta, ComponentStory } from '@storybook/react'

import { Navigation } from '.'

export default {
  title: 'Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => (
  <Navigation {...args} />
)

export const Default = Template.bind({})
