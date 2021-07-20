import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { PageWrapper, withRouteOptions } from '~/components'

const SetEdit = () => {
  return (
    <PageWrapper>
      <Text>SetEdit</Text>
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Set Edit' })(SetEdit)
