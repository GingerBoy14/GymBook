/**
 * @format
 */
import React from 'react'
import { AppRegistry } from 'react-native'
import { ThemeProvider } from '@qonsoll/react-native-design'
import App from '~/app'
import { AppWrapper } from '~/components'
import theme from '~/styles/theme'
import { name as appName } from './app.json'

const Index = () => (
  <ThemeProvider theme={theme}>
    <AppWrapper>
      <App />
    </AppWrapper>
  </ThemeProvider>
)

AppRegistry.registerComponent(appName, () => Index)
