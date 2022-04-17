import { render, screen } from '~/utils/tests'

import { Title } from '.'

describe('<Title />', () => {
  it('should render correctly', () => {
    render(<Title>Title component</Title>)

    expect(screen.getByRole('heading')).toHaveTextContent('Title component')
  })
})
