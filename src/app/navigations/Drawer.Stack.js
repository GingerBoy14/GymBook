import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Drawer as DrawerContent } from '~/app/domains/App/components'
import BottomTabNavigator from './BottomTabNavigator'
const Drawer = createDrawerNavigator()

const DrawerStack = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerPosition="right"
    drawerContent={(props) => <DrawerContent {...props} />}>
    <Drawer.Screen name="Home" component={BottomTabNavigator} />
  </Drawer.Navigator>
)

export default DrawerStack
