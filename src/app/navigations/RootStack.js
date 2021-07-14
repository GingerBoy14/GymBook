import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { useSession } from '~/app/contexts/Session'
import DrawerStack from './DrawerStack'
import SessionStack from './SessionStack'

const Stack = createStackNavigator()

const RootStack = () => {
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
