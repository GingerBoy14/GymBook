import ROUTE_PATHS from '~/constants/routePaths'
import { Dashboard, Settings } from '../routes'

export default {
  [ROUTE_PATHS.DASHBOARD]: {
    name: ROUTE_PATHS.DASHBOARD,
    component: Dashboard
  },
  [ROUTE_PATHS.SETTINGS]: { name: ROUTE_PATHS.SETTINGS, component: Settings }
}
