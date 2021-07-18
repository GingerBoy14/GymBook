import React from 'react'
import { Input as QonsollInput, Text } from '@qonsoll/react-native-design'
import PasswordInput from '~/components/Lib/Inputs/PasswordInput'

const Input = (props) => {
  const { error, ...rest } = props
  return (
    <>
      <QonsollInput {...rest} variant={error && 'danger'} />
      {error && <Text color="danger-default">{error}</Text>}
    </>
  )
}

Input.Password = PasswordInput

export default Input
