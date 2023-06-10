import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import { Router } from './routes/index.tsx'
import { UserContextProvider } from './contexts/userContext'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <UserContextProvider>
          <Router />
        </UserContextProvider>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
