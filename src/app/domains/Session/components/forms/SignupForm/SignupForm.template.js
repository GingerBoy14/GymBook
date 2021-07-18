import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@qonsoll/react-native-design'
import { Input } from '~/components/Lib'

const SignupForm = (props) => {
  const { onSubmit } = props
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
        <Input.Password
          label="Password"
          placeholder="Enter your password"
          onChange={(data) => console.log(data)}
          throwOnlyValueOnChange
        />
      </Box>
      <Box mb={20}>
        <Input.Password
          label="Confirm password"
          placeholder="Confirm your password"
          onChange={(data) => console.log(data)}
          throwOnlyValueOnChange
        />
      </Box>

      <Button onPress={onSubmit}>Sign up</Button>
    </>
  )
}

SignupForm.propTypes = { onSubmit: PropTypes.func }

export default SignupForm
