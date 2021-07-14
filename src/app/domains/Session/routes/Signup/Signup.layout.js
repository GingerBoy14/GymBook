import React from 'react'
import { Box, Text, Button } from '@qonsoll/react-native-design'
import ROUTE_PATHS from '~/constants/routePaths'

const Signup = (props) => {
  const { navigation } = props
  return (
    <Box>
      <Text variant="h2">Signup</Text>
      <Button onPress={() => navigation.pop()}>go to login</Button>
      <Button onPress={() => navigation.navigate(ROUTE_PATHS.FORGOT_PASSWORD)}>
        forgot password
      </Button>
    </Box>
  )
}

export default Signup
