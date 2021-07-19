import ROUTE_PATHS from '~/constants/routePaths'
import { UserShow, UserEdit, UserCreate } from '../routes'

export default {
  [ROUTE_PATHS.USER_EDIT]: {
    name: ROUTE_PATHS.USER_EDIT,
    component: UserEdit
  },
  [ROUTE_PATHS.USER_SHOW]: { name: ROUTE_PATHS.USER_SHOW, component: UserShow },
  [ROUTE_PATHS.USER_CREATE]: {
    name: ROUTE_PATHS.USER_CREATE,
    component: UserCreate
  }
}
