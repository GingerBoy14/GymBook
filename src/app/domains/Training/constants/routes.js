import ROUTE_PATHS from '~/constants/routePaths'
import { TrainingEdit, TrainingShow } from '../routes'

export default {
  [ROUTE_PATHS.TRAINING_EDIT]: {
    name: ROUTE_PATHS.TRAINING_EDIT,
    component: TrainingEdit
  },
  [ROUTE_PATHS.TRAINING_SHOW]: {
    name: ROUTE_PATHS.TRAINING_SHOW,
    component: TrainingShow
  }
}
