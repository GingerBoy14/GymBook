import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { PageWrapper, withRouteOptions } from '~/components'

const SetCreate = () => {
  return (
    <PageWrapper>
      <Text>SetCreate</Text>
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Create Set' })(SetCreate)
