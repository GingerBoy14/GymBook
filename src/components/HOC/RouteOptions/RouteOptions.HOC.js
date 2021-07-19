import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

/**
 * @info withRouteOptions (19 Jul 2021) // CREATION DATE
 *
 * @comment
 * This HoC created using this functionality that able to [set option to navigation]{@link https://reactnavigation.org/docs/headers/#updating-options-with-setoptions}
 *
 * @since 19 Jul 2021 ( v.0.0.4 ) // LAST-EDIT DATE
 *
 * @param {function|object} options               Options that configure Stack.Screen
 *
 * @param {string}          [options.title]       Route title that will display in header.
 *
 * @returns {function(node): function(object): React.ReactNode}
 */
const withRouteOptions = (options) => (Component) => (props) => {
  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()

  // [USE_EFFECT]
  useLayoutEffect(() => {
    switch (typeof options) {
      case 'function': {
        navigation.setOptions(options(props))
        break
      }
      default: {
        navigation.setOptions(options)
        break
      }
    }
  }, [navigation, props])

  return <Component {...props} />
}

export default withRouteOptions
