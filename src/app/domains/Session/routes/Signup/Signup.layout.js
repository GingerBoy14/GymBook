import React from 'react'
import { Box, Text, Link } from '@qonsoll/react-native-design'
import { TYPES, useSession } from '~/app/contexts/Session'
import { PageWrapper } from '~/components'
import { SignupForm } from '~/app/domains/Session/components'

const default_user_data = {
  firstName: 'Maxim',
  secondName: 'Makarov',
  email: 'maxim.makarov14@gmail.com',
  weight: 73.5,
  birthday: 1279480759000
}

const Signup = (props) => {
  const { navigation } = props

  // [ADDITIONAL_HOOKS]
  const { sessionDispatch } = useSession()

  // [CLEAN_FUNCTIONS]
  const goToLogin = () => navigation.pop()
  const onSignup = () =>
    sessionDispatch({ type: TYPES.SET_USER, payload: default_user_data })
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
        <SignupForm onSubmit={onSignup} />
      </Box>
      <Box flexDirection="row" justifyContent="center">
        <Text type="secondary">Already have account? </Text>
        <Link onPress={goToLogin}>Login</Link>
      </Box>
    </PageWrapper>
  )
}

export default Signup
