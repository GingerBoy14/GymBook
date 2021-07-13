import ROUTE_PATHS from '~/constants/routePaths'
import { Login, Signup } from '../routes'

export default {
  [ROUTE_PATHS.LOGIN]: { name: ROUTE_PATHS.LOGIN, component: Login },
  [ROUTE_PATHS.SIGN_UP]: { name: ROUTE_PATHS.SIGN_UP, component: Signup }
}
