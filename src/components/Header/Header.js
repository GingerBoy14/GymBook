import React from 'react'
import { Pressable, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Avatar, Col, Row, Text } from '@qonsoll/react-native-design'
import { ArrowLeftShort } from '@qonsoll/react-native-design/src/assets'
import theme from '~/styles/theme'

const Header = (props) => {
  const { scene, navigation, previous } = props
  const { options } = scene.descriptor

  // [ADDITIONAL_HOOKS]
  const insets = useSafeAreaInsets()

  // [COMPUTED_PROPERTIES]
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name

  return (
    <Row
      pt={insets.top || 8}
      pl={insets.left || 8}
      pr={insets.right || 8}
      pb={8}
      bg="grey-9">
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
      <Col auto>
        <Pressable onPress={navigation.openDrawer}>
          <Avatar />
        </Pressable>
      </Col>
    </Row>
  )
}

Header.propTypes = {}

export default Header
