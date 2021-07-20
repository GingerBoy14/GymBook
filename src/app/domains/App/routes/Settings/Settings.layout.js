import React from 'react'
import { Menu } from '@qonsoll/react-native-design'
import { PageWrapper } from '~/components'
import { ROUTE_PATHS } from '~/constants'

const Settings = (props) => {
  const { navigation } = props

  // [COMPUTED_PROPERTIES]
  const menuItems = [
    {
      text: 'Profile Edit',
      onPress: () => navigation.push(ROUTE_PATHS.USER_EDIT)
    },
    {
      text: 'Exercises',
      onPress: () => navigation.push(ROUTE_PATHS.EXERCISE_ALL)
    },
    {
      text: 'Set configs',
      onPress: () => navigation.push(ROUTE_PATHS.SET_ALL)
    },
    {
      text: 'Membership',
      onPress: () => navigation.push(ROUTE_PATHS.MEMBERSHIP_EDIT)
    }
  ]

  return (
    <PageWrapper>
      <Menu menuItems={menuItems} />
    </PageWrapper>
  )
}

export default Settings
