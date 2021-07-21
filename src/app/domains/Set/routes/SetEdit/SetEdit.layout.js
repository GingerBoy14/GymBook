import React from 'react'
import { deleteDocument, updateDocument } from '~/services'
import { PageWrapper, withRouteOptions } from '~/components'
import { SetForm } from '~/app/domains/Set/components'
import { COLLECTIONS } from '~/constants'

const SetEdit = (props) => {
  const { route, navigation } = props

  // [COMPUTED_PROPERTIES]
  const setData = route.params.setData
  const defaultValues = (() => {
    const defaultValue = { params: setData.params }

    setData.params.forEach(({ type }) => {
      defaultValue[type] = true
    })
    return defaultValue
  })()

  // [CLEAN_FUNCTIONS]
  const onDelete = async () => {
    await deleteDocument(COLLECTIONS.SET_TEMPLATES, setData.id)
    navigation.goBack()
  }
  const onSubmit = async (data) => {
    const { params } = data
    await updateDocument(COLLECTIONS.SET_TEMPLATES, setData.id, { params })
    navigation.goBack()
  }

  return (
    <PageWrapper>
      <SetForm
        onDelete={onDelete}
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        edit
      />
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Set Edit' })(SetEdit)
