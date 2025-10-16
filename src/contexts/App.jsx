import PropTypes from 'prop-types'
import { createContext } from 'react'

import useMediaQuery from '@mui/material/useMediaQuery'

const App = createContext()

const AppProvider = (props) => {
  // BREAKPOINT
  const isXsScreen = useMediaQuery(theme => theme.breakpoints.only('xs'))
  const isSmScreen = useMediaQuery(theme => theme.breakpoints.only('sm'))
  const isMdScreen = useMediaQuery(theme => theme.breakpoints.only('md'))
  const isLgScreen = useMediaQuery(theme => theme.breakpoints.only('lg'))
  const isXlScreen = useMediaQuery(theme => theme.breakpoints.only('xl'))

  let breakpointType
  isXsScreen && (breakpointType = 'xs')
  isSmScreen && (breakpointType = 'sm')
  isMdScreen && (breakpointType = 'md')
  isLgScreen && (breakpointType = 'lg')
  isXlScreen && (breakpointType = 'xl')

  return (
    <App.Provider
      value={{
        // BREAKPOINT
        breakpointType
      }}
    >
      {props.children}
    </App.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { App, AppProvider }
