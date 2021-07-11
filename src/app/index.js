import 'react-native-gesture-handler'
import React from 'react'
import { Box, Text, Row, Col } from '@qonsoll/react-native-design'
import { NavigationContainer } from '@react-navigation/native'
const App = () => (
  <NavigationContainer>
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
  </NavigationContainer>
)

export default App
