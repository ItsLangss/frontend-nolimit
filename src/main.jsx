import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles'

import theme from 'src/constants/theme'
import { AppProvider } from 'src/contexts/App'

import GlobalStyles from 'src/components/GlobalStyles'

import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <AppProvider>
          <BrowserRouter>
            <GlobalStyles/>
            <App/>
          </BrowserRouter>
        </AppProvider>
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>
)
