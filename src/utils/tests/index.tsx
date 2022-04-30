/* eslint-disable import/export */

import { RenderOptions, RenderResult, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '~/styles'

const customRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult =>
  render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    ),
    ...options,
  })

export * from '@testing-library/react'
export { customRender as render, userEvent }
