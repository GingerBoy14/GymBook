import React from 'react'
import { Button } from '@qonsoll/react-native-design'
import { Plus } from '@qonsoll/react-native-design/src/assets'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getCollectionRef } from '~/services'
import { PageLoading, PageWrapper, withRouteOptions } from '~/components'
import { SetList } from '~/app/domains/Set/components'
import { COLLECTIONS, ROUTE_PATHS } from '~/constants'

const SetAll = (props) => {
  const { navigation } = props

  // [ADDITIONAL_HOOKS]
  const [setTemplates, loading] = useCollectionData(
    getCollectionRef(COLLECTIONS.SET_TEMPLATES)
  )

  // [CLEAN_FUNCTIONS]
  const onCreate = () => navigation.push(ROUTE_PATHS.SET_CREATE)

  return (
    <PageWrapper
      headingProps={{ mb: 8 }}
      action={<Button icon={<Plus />} onPress={onCreate} />}>
      <PageLoading loading={loading}>
        <SetList data={setTemplates} />
      </PageLoading>
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Set configs' })(SetAll)
