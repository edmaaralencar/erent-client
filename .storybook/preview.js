import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'
import React from 'react'

const preview = {
  parameters: {
    backgrounds: {
      default: 'light'
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div style={{ fontFamily: 'sans-serif' }}>
        <Story />
      </div>
    </ThemeProvider>
  )
]

export default preview
