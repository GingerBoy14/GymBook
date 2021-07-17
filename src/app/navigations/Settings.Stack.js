import React from 'react'
import DefaultStack from './Default.Stack'
import { routes, ROUTE_PATHS } from '~/constants'

const screens = [
  routes[ROUTE_PATHS.SETTINGS],
  routes[ROUTE_PATHS.SET_EDIT],
  routes[ROUTE_PATHS.SET_CREATE],
  routes[ROUTE_PATHS.MEMBERSHIP_EDIT],
  routes[ROUTE_PATHS.EXERCISE_EDIT],
  routes[ROUTE_PATHS.EXERCISE_CREATE],
  routes[ROUTE_PATHS.EXERCISE_ALL],
  routes[ROUTE_PATHS.USER_EDIT]
]

const SettingsStack = () => <DefaultStack screens={screens} />

export default SettingsStack
