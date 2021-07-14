import React from 'react'
import PropTypes from 'prop-types'
import { createStackNavigator } from '@react-navigation/stack'
import { Header } from '~/components'

const Stack = createStackNavigator()

const DefaultStack = ({ screens, withoutHeader = false }) => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => (!withoutHeader ? <Header {...props} /> : null)
    }}>
    {screens.map(({ name, component }) => (
      <Stack.Screen name={name} component={component} key={name} />
    ))}
  </Stack.Navigator>
)

DefaultStack.propTypes = {
  screens: PropTypes.array,
  withHeader: PropTypes.bool
}

export default DefaultStack
