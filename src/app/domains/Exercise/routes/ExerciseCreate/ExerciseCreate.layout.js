import React from 'react'
import { PageWrapper, withRouteOptions } from '~/components'
import { ExerciseForm } from '~/app/domains/Exercise/components'

const ExerciseCreate = () => {
  return (
    <PageWrapper>
      <ExerciseForm />
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Create Exercise' })(ExerciseCreate)
