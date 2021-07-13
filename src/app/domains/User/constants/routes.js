import ROUTE_PATHS from '~/constants/routePaths'
import { UserShow, UserEdit } from '../routes'

export default {
  [ROUTE_PATHS.USER_EDIT]: { name: ROUTE_PATHS.USER_EDIT, component: UserEdit },
  [ROUTE_PATHS.USER_SHOW]: { name: ROUTE_PATHS.USER_SHOW, component: UserShow }
}
