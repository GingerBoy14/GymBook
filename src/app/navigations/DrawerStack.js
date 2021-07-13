import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView
} from '@react-navigation/drawer'
import { UserShow } from '~/app/domains/User/routes'
import { BottomTabNavigator } from './'
const Drawer = createDrawerNavigator()

const DrawerStack = () => (
  <Drawer.Navigator
    drawerPosition="right"
    drawerContent={(props) => (
      <DrawerContentScrollView {...props}>
        <UserShow />
      </DrawerContentScrollView>
    )}>
    <Drawer.Screen name="Home" component={BottomTabNavigator} />
  </Drawer.Navigator>
)

export default DrawerStack
