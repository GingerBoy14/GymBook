import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Input } from '@qonsoll/react-native-design'

const SignupForm = (props) => {
  return (
    <>
      <Box mb={20}>
        <Input
          label="Email"
          placeholder="Enter your email"
          onChange={(data) => console.log(data)}
          throwOnlyValueOnChange
        />
      </Box>
      <Box mb={20}>
        <Input
          label="Password"
          placeholder="Enter your password"
          onChange={(data) => console.log(data)}
          throwOnlyValueOnChange
        />
      </Box>
      <Box mb={20}>
        <Input
          label="Confirm password"
          placeholder="Confirm your password"
          onChange={(data) => console.log(data)}
          throwOnlyValueOnChange
        />
      </Box>

      <Button>Sign up</Button>
    </>
  )
}

SignupForm.propTypes = {}

export default SignupForm
