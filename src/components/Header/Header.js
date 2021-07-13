import React from 'react'
import { Avatar, Col, Row, Text } from '@qonsoll/react-native-design'
import { Pressable } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Header = (props) => {
  const { scene, navigation } = props
  const { options } = scene.descriptor
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name
  const insets = useSafeAreaInsets()
  return (
    <Row
      pt={insets.top || 8}
      pl={insets.left || 8}
      pr={insets.right || 8}
      pb={8}>
      <Col v="center">
        <Text variant="h4">{title}</Text>
      </Col>
      <Col auto>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Avatar />
        </Pressable>
      </Col>
    </Row>
  )
}

Header.propTypes = {}

export default Header
