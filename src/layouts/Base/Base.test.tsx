import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { Base } from '.'

describe('<Base />', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Base />
      </MemoryRouter>
    )

    expect(screen.getByRole('navigation')).toBeInTheDocument()

    const [home, about] = screen.getAllByRole('link')
    expect(home).toHaveTextContent('Home')
    expect(about).toHaveTextContent('About')
  })
})
