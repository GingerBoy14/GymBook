import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  DashboardStack,
  StatisticStack,
  SettingsStack
} from '~/app/navigations'
const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Dashboard" component={DashboardStack} />
    <Tab.Screen name="Statistic" component={StatisticStack} />
    <Tab.Screen name="Settings" component={SettingsStack} />
  </Tab.Navigator>
)

export default BottomTabNavigator
