import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import { Header } from '~/components'

const Stack = createStackNavigator()

const DefaultStack = ({ screens, withoutHeader = false, ...restProps }) => (
  <Stack.Navigator
    detachInactiveScreens
    screenOptions={{
      header: (props) => (!withoutHeader ? <Header {...props} /> : null)
    }}
    {...restProps}>
    {screens.map(({ name, component, ...rest }) => (
      <Stack.Screen name={name} component={component} key={name} {...rest} />
    ))}
  </Stack.Navigator>
)

DefaultStack.propTypes = {
  screens: PropTypes.array,
  withHeader: PropTypes.bool
}

export default DefaultStack
