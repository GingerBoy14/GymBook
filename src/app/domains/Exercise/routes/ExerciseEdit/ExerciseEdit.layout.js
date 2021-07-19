import React from 'react'
import { Text } from '@qonsoll/react-native-design'
import { PageWrapper, withRouteOptions } from '~/components'

const ExerciseEdit = () => {
  return (
    <PageWrapper>
      <Text>ExerciseEdit</Text>
    </PageWrapper>
  )
}

const titleTransformer = ({ route }) => ({ title: route.params.name })

export default withRouteOptions(titleTransformer)(ExerciseEdit)
