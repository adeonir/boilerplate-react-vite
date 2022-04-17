import React from 'react'

import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import { App } from './App'

import { GlobalStyle, theme } from '~/styles'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
