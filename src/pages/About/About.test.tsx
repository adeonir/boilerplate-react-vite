import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { About } from '.'

describe('<About />', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )

    const [title, description] = screen.getAllByRole('heading')

    expect(title).toHaveTextContent('About Page')
    expect(description).toHaveTextContent('This is the about page description')
  })
})
