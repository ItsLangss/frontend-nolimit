import paths from 'src/constants/paths'
import Dashboard from 'src/pages/Private/Dashboard/Dashboard'

const routes = [
  // PRIVATE
  {
    path: paths.dashboard,
    element: <Dashboard/>,
    routeType: 'private'
  }
]

export default routes