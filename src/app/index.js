import React from 'react'
import { Box, Text, Row, Col } from '@qonsoll/react-native-design'

const App = () => (
  <Row>
    <Col>
      <Box bg="black" flex={1}>
        <Text>Box1</Text>
      </Box>
    </Col>
    <Col>
      <Box bg="white" flex={1}>
        <Text>Box2</Text>
      </Box>
    </Col>
  </Row>
)

export default App
