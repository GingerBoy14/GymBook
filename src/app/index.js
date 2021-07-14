import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { SessionProvider } from '~/app/contexts/Session'
import RootNavigation from '~/app/navigations'

const App = () => (
  <SessionProvider>
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  </SessionProvider>
)

export default App
