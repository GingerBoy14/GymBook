import { Button } from '@qonsoll/react-native-design'
import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TYPES, useSession } from '~/app/contexts/Session'
import { UserShow } from '~/app/domains/User/routes'

const DrawerTemplate = (props) => {
  // [ADDITIONAL_HOOKS]
  const { sessionDispatch } = useSession()
  const insets = useSafeAreaInsets()

  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'space-between',
        paddingBottom: insets.bottom
      }}
      {...props}>
      <UserShow />
      <Button
        variant="danger-light"
        mx={12}
        onPress={() => sessionDispatch({ type: TYPES.LOGOUT })}>
        Logout
      </Button>
    </DrawerContentScrollView>
  )
}

export default DrawerTemplate
