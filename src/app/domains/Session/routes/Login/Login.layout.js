import React from 'react'
import { Box, Text, Link } from '@qonsoll/react-native-design'
import { useSession, TYPES } from '~/app/contexts/Session'
import { PageWrapper } from '~/components'
import { LoginForm } from '~/app/domains/Session/components'
import ROUTE_PATHS from '~/constants/routePaths'

const default_user_data = {
  firstName: 'Maxim',
  secondName: 'Makarov',
  email: 'maxim.makarov14@gmail.com',
  weight: 73.5
}

const Login = (props) => {
  const { navigation } = props
  // [ADDITIONAL_HOOKS]
  const { sessionDispatch } = useSession()

  // [CLEAN_FUNCTIONS]
  const goToSignup = () => navigation.navigate(ROUTE_PATHS.SIGN_UP)

  const onLogin = () =>
    sessionDispatch({ type: TYPES.SET_USER, payload: default_user_data })
  const onForgotPasswordClick = () =>
    navigation.navigate(ROUTE_PATHS.FORGOT_PASSWORD)
  return (
    <PageWrapper
      alignMiddle
      headingProps={{
        text: 'Login',
        titleSize: 3,
        textAlign: 'center',
        mb: 18
      }}>
      <Box mb={12}>
        <LoginForm
          onSubmit={onLogin}
          onForgotPasswordClick={onForgotPasswordClick}
        />
      </Box>

      <Box flexDirection="row" justifyContent="center">
        <Text type="secondary">Don't have account? </Text>
        <Link onPress={goToSignup}>Sign up</Link>
      </Box>
    </PageWrapper>
  )
}

export default Login
