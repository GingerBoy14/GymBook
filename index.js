/**
 * @format
 */
import React, { useEffect } from 'react'
import { AppRegistry } from 'react-native'
import { enableScreens } from 'react-native-screens'
import Orientation from 'react-native-orientation'
import { ThemeProvider } from '@qonsoll/react-native-design'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import App from '~/app'
import theme from '~/styles/theme'
import { name as appName } from './app.json'

enableScreens()

const Index = () => {
  useEffect(() => {
    Orientation.lockToPortrait()
  }, [])
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </SafeAreaProvider>
  )
}

AppRegistry.registerComponent(appName, () => Index)
