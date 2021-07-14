import React from 'react'
import { Box, Button, Text } from '@qonsoll/react-native-design'

const ForgotPassword = (props) => {
  const { navigation } = props
  return (
    <Box>
      <Text variant="h2">ForgotPassword</Text>
      <Button onPress={() => navigation.pop()}>go back</Button>
    </Box>
  )
}

export default ForgotPassword
