import React from 'react'
import DefaultStack from '~/app/navigations/Default.Stack'
import { routes, ROUTE_PATHS } from '~/constants'

const screens = [
  routes[ROUTE_PATHS.DASHBOARD],
  routes[ROUTE_PATHS.TRAINING_SHOW],
  routes[ROUTE_PATHS.TRAINING_EDIT]
]

const DashboardStack = () => <DefaultStack screens={screens} />

export default DashboardStack
