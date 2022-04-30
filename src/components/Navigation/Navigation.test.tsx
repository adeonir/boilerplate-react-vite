import { MemoryRouter } from 'react-router-dom'

import { NAV_LINKS } from '~/constants'
import { render, screen } from '~/utils/tests'

import { Navigation } from '.'

describe('<Navigation />', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Navigation links={NAV_LINKS} />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
  })
})
