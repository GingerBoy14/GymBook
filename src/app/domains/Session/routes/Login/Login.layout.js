import React from 'react'
import { Box, Text, Button } from '@qonsoll/react-native-design'
import { useSession, TYPES } from '~/app/contexts/Session'
import ROUTE_PATHS from '~/constants/routePaths'

const Login = (props) => {
  const { navigation } = props
  const { sessionDispatch } = useSession()
  return (
    <Box>
      <Text variant="h2">Login</Text>
      <Button
        onPress={() => sessionDispatch({ type: TYPES.SET_USER, payload: {} })}>
        Login
      </Button>
      <Button onPress={() => navigation.navigate(ROUTE_PATHS.SIGN_UP)}>
        go to sign up
      </Button>
      <Button onPress={() => navigation.navigate(ROUTE_PATHS.FORGOT_PASSWORD)}>
        forgot password
      </Button>
    </Box>
  )
}

export default Login
