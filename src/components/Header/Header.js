import React from 'react'
import { Animated, Pressable, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Col, Row, Text } from '@qonsoll/react-native-design'
import { ArrowLeftShort } from '@qonsoll/react-native-design/src/assets'
import { UserShow } from '~/app/domains/User/routes'
import theme from '~/styles/theme'

const Header = (props) => {
  const { scene, navigation, previous } = props
  const { options } = scene.descriptor

  // [ADDITIONAL_HOOKS]
  const insets = useSafeAreaInsets()

  // [COMPUTED_PROPERTIES]
  // Get title from options that will be show in header.
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name

  // Create animation that will be show between screen switch in one stack.
  const progress = Animated.add(
    scene.progress.current,
    scene.progress.next || 0
  )

  const opacity = progress.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0]
  })

  return (
    <Row
      pt={insets.top || 8}
      pl={insets.left || 8}
      pr={insets.right || 8}
      pb={8}>
      <Animated.View style={{ flex: 1, flexDirection: 'row', opacity }}>
        {previous && (
          <Col auto v="center" mr={8}>
            <TouchableOpacity onPress={navigation.goBack}>
              <ArrowLeftShort
                fill={theme.CORE.COLORS['primary-default']}
                height={theme.CORE.ICON_SIZES.lg}
                width={theme.CORE.ICON_SIZES.lg}
              />
            </TouchableOpacity>
          </Col>
        )}

        <Col v="center">
          <Text variant="h4">{title}</Text>
        </Col>
      </Animated.View>
      <Col auto>
        <Pressable onPress={navigation.openDrawer}>
          <UserShow avatar size="md" />
        </Pressable>
      </Col>
    </Row>
  )
}

Header.propTypes = {}

export default Header
