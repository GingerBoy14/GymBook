import React from 'react'
import { Pressable } from 'react-native'
import { Box, Text } from '@qonsoll/react-native-design'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import theme from '~/styles/theme'

const BottomNavigation = (props) => {
  const { state, descriptors, navigation } = props
  const focusedOptions = descriptors[state.routes[state.index].key].options

  // [ADDITIONAL_HOOKS]
  const insets = useSafeAreaInsets()

  if (focusedOptions.tabBarVisible === false) {
    return null
  }
  return (
    <Box pb={insets.bottom} pt={12} bg="grey-9" flexDirection="row">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name)
          }
        }

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          })
        }

        return (
          <Pressable
            style={{ flex: 1 }}
            onPress={onPress}
            onLongPress={onLongPress}
            key={route.name}>
            <Box alignItems="center">
              {options.tabBarIcon({
                color: isFocused && theme.CORE.COLORS['primary-default']
              })}
              <Text fontWeight="bold" color={isFocused && 'primary-default'}>
                {label}
              </Text>
            </Box>
          </Pressable>
        )
      })}
    </Box>
  )
}

export default BottomNavigation
