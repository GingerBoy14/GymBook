import React from 'react'
import { SafeAreaView } from 'react-native'
import DefaultStack from '~/app/navigations/Default.Stack'
import { routes, ROUTE_PATHS } from '~/constants'

const screens = [
  routes[ROUTE_PATHS.LOGIN],
  routes[ROUTE_PATHS.SIGN_UP],
  routes[ROUTE_PATHS.FORGOT_PASSWORD]
]

const SessionStack = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <DefaultStack screens={screens} withoutHeader />
  </SafeAreaView>
)

export default SessionStack
