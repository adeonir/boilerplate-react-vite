import { MemoryRouter } from 'react-router-dom'

import { render, screen } from '~/utils/tests'

import { Home } from '.'

describe('<Home />', () => {
  it('renders correctly', () => {
    render(<Home />, { wrapper: MemoryRouter })

    expect(screen.getByRole('heading')).toHaveTextContent(
      'This is the home page'
    )
  })
})
