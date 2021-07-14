import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Box, Text } from '@qonsoll/react-native-design'
import { ArrowLeftShort } from '@qonsoll/react-native-design/src/assets'
import { PageWrapper } from '~/components'
import { ForgotPasswordForm } from '~/app/domains/Session/components'
import theme from '~/styles/theme'

const ForgotPassword = (props) => {
  const { navigation } = props

  // [CLEAN_FUNCTIONS]
  const goToLogin = () => navigation.pop()

  return (
    <PageWrapper
      alignMiddle
      headingProps={{
        text: 'Restore Password',
        titleSize: 3,
        textAlign: 'center',
        mb: 18
      }}>
      <Box mb={34}>
        <ForgotPasswordForm />
      </Box>
      <TouchableOpacity onPress={goToLogin}>
        <Box alignItems="center" justifyContent="center" flexDirection="row">
          <ArrowLeftShort fill={theme.CORE.COLORS['primary-default']} />
          <Text color="primary-default">Back to Login</Text>
        </Box>
      </TouchableOpacity>
    </PageWrapper>
  )
}

export default ForgotPassword
