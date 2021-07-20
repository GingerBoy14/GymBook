import React from 'react'
import { Button } from '@qonsoll/react-native-design'
import { Plus } from '@qonsoll/react-native-design/src/assets'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from '~/services'
import { PageWrapper, withRouteOptions } from '~/components'
import { SetList } from '~/app/domains/Set/components'
import { COLLECTIONS, ROUTE_PATHS } from '~/constants'

const SetAll = (props) => {
  const { navigation } = props

  const [data] = useCollectionData(getCollectionRef(COLLECTIONS.SET_TEMPLATES))

  // [CLEAN_FUNCTIONS]
  const onCreate = () => navigation.push(ROUTE_PATHS.SET_CREATE)

  return (
    <PageWrapper
      headingProps={{ mb: 8 }}
      action={<Button icon={<Plus />} onPress={onCreate} />}>
      {data && <SetList data={data} />}
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Set configs' })(SetAll)
