import { render, screen } from '~/utils/tests'

import { Heading } from '.'

describe('<Heading />', () => {
  it('renders correctly', () => {
    render(<Heading>Heading component</Heading>)

    expect(screen.getByRole('heading')).toHaveTextContent('Heading component')
  })
})
