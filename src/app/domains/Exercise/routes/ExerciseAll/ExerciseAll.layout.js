import React from 'react'
import { Button } from '@qonsoll/react-native-design'
import { Plus } from '@qonsoll/react-native-design/src/assets'
import { PageWrapper, withRouteOptions } from '~/components'
import { ExerciseList } from '~/app/domains/Exercise/components'
import { ROUTE_PATHS } from '~/constants'

const MOCK_EXERCISES = [
  { name: 'Push-Ups', muscles: [{ name: 'Shoulders' }, { name: 'Triceps' }] },
  { name: 'Crunches', muscles: [{ name: 'Shoulders' }, { name: 'Triceps' }] },
  { name: 'Bench Dips', muscles: [{ name: 'Shoulders' }, { name: 'Triceps' }] },
  {
    name: 'Vertical jump',
    muscles: [{ name: 'Quadriceps' }, { name: 'Brain' }]
  }
]

const ExerciseAll = (props) => {
  const { navigation } = props
  // [CLEAN_FUNCTIONS]
  const onCreate = () => navigation.push(ROUTE_PATHS.EXERCISE_CREATE)
  return (
    <PageWrapper
      headingProps={{ mb: 8 }}
      action={<Button icon={<Plus />} onPress={onCreate} />}>
      <ExerciseList data={MOCK_EXERCISES} />
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Exercises' })(ExerciseAll)
