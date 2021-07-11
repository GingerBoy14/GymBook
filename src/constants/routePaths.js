import { snakeCase, toUpper } from 'lodash'
import routes from './routes'

const ROUTE_PATHS = {}

Object.keys(routes).forEach(
  (routeName) => (ROUTE_PATHS[toUpper(snakeCase(routeName))] = routeName)
)

export default ROUTE_PATHS
