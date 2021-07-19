import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

/**
 *
 * @param options
 * @param {string} [options.title]
 * @returns {function(node): function(object): *}
 */
const withRouteOptions = (options) => (Component) => (props) => {
  const navigation = useNavigation()

  // [USE_EFFECT]
  useLayoutEffect(() => {
    navigation.setOptions(options)
  }, [navigation])
  return <Component {...props} />
}

export default withRouteOptions
