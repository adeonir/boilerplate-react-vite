import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MemoryRouter } from 'react-router-dom'

import { NAV_LINKS } from '~/constants'

import { Navigation } from '.'

export default {
  title: 'Navigation',
  component: Navigation,
  args: {
    links: NAV_LINKS,
  },
} as ComponentMeta<typeof Navigation>

const Template: ComponentStory<typeof Navigation> = (args) => (
  <MemoryRouter>
    <Navigation {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
