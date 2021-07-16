import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSession } from '~/app/contexts/Session'
import DrawerStack from './Drawer.Stack'
import SessionStack from './Session.Stack'

const Stack = createStackNavigator()

const RootStack = () => {
  // [ADDITIONAL_HOOKS]
  const { session } = useSession()

  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null
      }}>
      {session.userData ? (
        <Stack.Screen name="Home" component={DrawerStack} />
      ) : (
        <Stack.Screen name="Session" component={SessionStack} />
      )}
    </Stack.Navigator>
  )
}

export default RootStack
