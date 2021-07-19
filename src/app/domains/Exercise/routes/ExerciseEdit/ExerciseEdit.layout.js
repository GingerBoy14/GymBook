import React from 'react'
import { PageWrapper, withRouteOptions } from '~/components'
import { ExerciseForm } from '~/app/domains/Exercise/components'

const ExerciseEdit = (props) => {
  const { route } = props

  // [COMPUTED_PROPERTIES]
  const defaultValues = { name: route.params.name }

  return (
    <PageWrapper>
      <ExerciseForm defaultValues={defaultValues} />
    </PageWrapper>
  )
}

const titleTransformer = ({ route }) => ({ title: route.params.name })

export default withRouteOptions(titleTransformer)(ExerciseEdit)
