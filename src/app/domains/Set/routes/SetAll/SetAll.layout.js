import React from 'react'
import { Button } from '@qonsoll/react-native-design'
import { Plus } from '@qonsoll/react-native-design/src/assets'
import { PageWrapper, withRouteOptions } from '~/components'
import { SetList } from '~/app/domains/Set/components'
import { ROUTE_PATHS } from '~/constants'

const MOCK_SETS = [
  { params: [{ type: 'speed' }, { type: 'time' }, { type: 'distance' }] },
  { params: [{ type: 'time' }, { type: 'weight' }] },
  { params: [{ type: 'reps' }, { type: 'weight' }] }
]

const SetAll = (props) => {
  const { navigation } = props
  // [CLEAN_FUNCTIONS]
  const onCreate = () => navigation.push(ROUTE_PATHS.SET_CREATE)

  return (
    <PageWrapper
      headingProps={{ mb: 8 }}
      action={<Button icon={<Plus />} onPress={onCreate} />}>
      <SetList data={MOCK_SETS} />
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Set configs' })(SetAll)
