import { render, screen } from '~/utils/tests'

import { App } from './App'

describe('App', () => {
  it('renders', () => {
    render(<App />)

    expect(screen.getByText('Hello Vite + React!')).toBeInTheDocument()
  })
})
