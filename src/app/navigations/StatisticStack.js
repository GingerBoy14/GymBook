import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Header } from '~/components'
import { routes, ROUTE_PATHS } from '~/constants'

const Stack = createStackNavigator()

const screens = [routes[ROUTE_PATHS.STATISTIC_SHOW]]

const StatisticStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <Header {...props} />
    }}>
    {screens.map(({ name, component }) => (
      <Stack.Screen name={name} component={component} />
    ))}
  </Stack.Navigator>
)

export default StatisticStack
