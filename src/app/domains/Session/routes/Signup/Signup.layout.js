import React from 'react'
import { Box, Text, Link } from '@qonsoll/react-native-design'
import { PageWrapper } from '~/components'
import { SignupForm } from '~/app/domains/Session/components'

const Signup = (props) => {
  const { navigation } = props

  // [CLEAN_FUNCTIONS]
  const goToLogin = () => navigation.pop()

  return (
    <PageWrapper
      alignMiddle
      headingProps={{
        text: 'Sign up',
        titleSize: 3,
        textAlign: 'center',
        mb: 18
      }}>
      <Box mb={12}>
        <SignupForm />
      </Box>
      <Box flexDirection="row" justifyContent="center">
        <Text type="secondary">Already have account? </Text>
        <Link onPress={goToLogin}>Login</Link>
      </Box>
    </PageWrapper>
  )
}

export default Signup
