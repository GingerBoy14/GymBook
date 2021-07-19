import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { PageWrapper, withRouteOptions } from '~/components'

const ExerciseCreate = () => {
  return (
    <PageWrapper>
      <Text>ExerciseCreate</Text>
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Create Exercise' })(ExerciseCreate)
