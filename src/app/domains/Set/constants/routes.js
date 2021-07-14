import ROUTE_PATHS from '~/constants/routePaths'
import { SetEdit, SetCreate } from '../routes'

export default {
  [ROUTE_PATHS.SET_EDIT]: { name: ROUTE_PATHS.SET_EDIT, component: SetEdit },
  [ROUTE_PATHS.SET_CREATE]: {
    name: ROUTE_PATHS.SET_CREATE,
    component: SetCreate
  }
}
