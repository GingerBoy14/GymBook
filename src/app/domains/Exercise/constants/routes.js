import ROUTE_PATHS from '~/constants/routePaths'
import { ExerciseEdit, ExerciseCreate, ExerciseAll } from '../routes'

export default {
  [ROUTE_PATHS.EXERCISE_ALL]: {
    name: ROUTE_PATHS.EXERCISE_ALL,
    component: ExerciseAll
  },
  [ROUTE_PATHS.EXERCISE_CREATE]: {
    name: ROUTE_PATHS.EXERCISE_CREATE,
    component: ExerciseCreate
  },
  [ROUTE_PATHS.EXERCISE_EDIT]: {
    name: ROUTE_PATHS.EXERCISE_EDIT,
    component: ExerciseEdit
  }
}
