import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Button,
  Col,
  Input,
  Link,
  Row
} from '@qonsoll/react-native-design'

const LoginForm = (props) => {
  const { onForgotPasswordClick, onSubmit } = props
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

      <Row v="center">
        <Col>
          <Link onPress={onForgotPasswordClick}>Forgot password?</Link>
        </Col>
        <Col flex={1} flexDirection="column">
          <Button onPress={onSubmit}>Login</Button>
        </Col>
      </Row>
    </>
  )
}

LoginForm.propTypes = {
  onForgotPasswordClick: PropTypes.func,
  onSubmit: PropTypes.func
}

export default LoginForm
