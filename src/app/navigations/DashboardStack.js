import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Header } from '~/components'
import { routes, ROUTE_PATHS } from '~/constants'

const Stack = createStackNavigator()

const screens = [
  routes[ROUTE_PATHS.DASHBOARD],
  routes[ROUTE_PATHS.TRAINING_SHOW],
  routes[ROUTE_PATHS.TRAINING_EDIT]
]

const DashboardStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <Header {...props} />
    }}>
    {screens.map(({ name, component }) => (
      <Stack.Screen name={name} component={component} key={name} />
    ))}
  </Stack.Navigator>
)

export default DashboardStack
