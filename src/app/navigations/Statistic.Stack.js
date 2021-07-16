import React from 'react'
import DefaultStack from './Default.Stack'
import { routes, ROUTE_PATHS } from '~/constants'

const screens = [routes[ROUTE_PATHS.STATISTIC_SHOW]]

const StatisticStack = () => <DefaultStack screens={screens} />

export default StatisticStack
