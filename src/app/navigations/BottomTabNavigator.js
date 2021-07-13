import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Dashboard,
  Settings,
  Summary
} from '@qonsoll/react-native-design/src/assets'
import {
  DashboardStack,
  StatisticStack,
  SettingsStack
} from '~/app/navigations'
import { BottomNavigation } from '~/components'
import ROUTE_PATHS from '~/constants/routePaths'

const Tab = createBottomTabNavigator()

const screens = [
  { name: ROUTE_PATHS.DASHBOARD, component: DashboardStack, Icon: Dashboard },
  { name: 'Statistics', component: StatisticStack, Icon: Summary },
  { name: ROUTE_PATHS.SETTINGS, component: SettingsStack, Icon: Settings }
]

const BottomTabNavigator = () => (
  <Tab.Navigator tabBar={(props) => <BottomNavigation {...props} />}>
    {screens.map(({ Icon, ...rest }) => (
      <Tab.Screen
        key={rest.name}
        options={{
          tabBarIcon: ({ color }) => <Icon fill={color} />
        }}
        {...rest}
      />
    ))}
  </Tab.Navigator>
)

export default BottomTabNavigator
