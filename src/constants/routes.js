import { default as AppRoutes } from '~/app/domains/App/constants/routes'
import { default as ExerciseRoutes } from '~/app/domains/Exercise/constants/routes'
import { default as MembershipRoutes } from '~/app/domains/Membership/constants/routes'
import { default as SessionRoutes } from '~/app/domains/Session/constants/routes'
import { default as SetRoutes } from '~/app/domains/Set/constants/routes'
import { default as StatisticRoutes } from '~/app/domains/Statistic/constants/routes'
import { default as TrainingRoutes } from '~/app/domains/Training/constants/routes'
import { default as UserRoutes } from '~/app/domains/User/constants/routes'

export default {
  ...AppRoutes,
  ...ExerciseRoutes,
  ...MembershipRoutes,
  ...SessionRoutes,
  ...SetRoutes,
  ...StatisticRoutes,
  ...TrainingRoutes,
  ...UserRoutes
}
