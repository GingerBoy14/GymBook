import ROUTE_PATHS from '~/constants/routePaths'
import { ExerciseEdit } from '../routes'

export default {
  [ROUTE_PATHS.EXERCISE_EDIT]: {
    name: ROUTE_PATHS.EXERCISE_EDIT,
    component: ExerciseEdit
  },
  [ROUTE_PATHS.EXERCISE_CREATE]: {
    name: ROUTE_PATHS.EXERCISE_CREATE,
    component: ExerciseEdit
  }
}
