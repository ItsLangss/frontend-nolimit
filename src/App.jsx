import { Route, Routes } from 'react-router-dom'

import { LicenseInfo } from '@mui/x-license'

import routes from './routes'
import PrivateRoute from './components/Routes/Private'

LicenseInfo.setLicenseKey(import.meta.env.VITE_DATA_GRID_PREMIUM_LICENSE)

const App = () => {
  const getRouteComponent = (routeType, element) => {
    if (routeType === 'private') {
      return (
        <PrivateRoute>
          {element}
        </PrivateRoute>
      )
    } else if (routeType === 'free') return element
  }

  return (
    <Routes>
      {routes.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          element={getRouteComponent(item.routeType, item.element)}
        />
      ))}
    </Routes>
  )
}

export default App