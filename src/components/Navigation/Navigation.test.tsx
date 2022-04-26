import { render, screen } from '~/utils/tests'

import { Navigation } from '.'

describe('<Navigation />', () => {
  it('renders', () => {
    render(<Navigation prop="navigation" />)

    expect(
      screen.getByRole('heading', { name: /navigation/i })
    ).toBeInTheDocument()
  })
})
