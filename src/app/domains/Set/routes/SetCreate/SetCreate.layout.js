import React from 'react'
import { PageWrapper, withRouteOptions } from '~/components'
import { SetForm } from '~/app/domains/Set/components'
import { COLLECTIONS } from '~/constants'
import { createDocument } from '~/services'

const SetCreate = (props) => {
  const { navigation } = props

  // [CLEAN_FUNCTIONS]
  const onSubmit = async (data) => {
    const { params } = data

    await createDocument(COLLECTIONS.SET_TEMPLATES, { params })
    navigation.goBack()
  }

  return (
    <PageWrapper>
      <SetForm onSubmit={onSubmit} />
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Create Set' })(SetCreate)
