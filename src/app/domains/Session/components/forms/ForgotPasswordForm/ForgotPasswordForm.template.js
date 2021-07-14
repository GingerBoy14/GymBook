import React from 'react'
import { Box, Button, Input } from '@qonsoll/react-native-design'
import PropTypes from 'prop-types'

const ForgotPasswordForm = (props) => {
  return (
    <>
      <Box mb={20}>
        <Input
          placeholder="Enter your account email"
          onChange={(data) => console.log(data)}
          throwOnlyValueOnChange
        />
      </Box>

      <Button>Restore password</Button>
    </>
  )
}

ForgotPasswordForm.propTypes = {}

export default ForgotPasswordForm
