import React from 'react'
import { useSession, TYPES } from '~/app/contexts/Session'
import { PageWrapper } from '~/components'
import { UserForm } from '~/app/domains/User/components'
import { withRouteOptions } from '~/components/HOC'

const UserEdit = (props) => {
  const { navigation } = props
  // [ADDITIONAL_HOOKS]
  const { sessionDispatch } = useSession()

  // [CLEAN_FUNCTIONS]
  const onUserEdit = (data) => {
    sessionDispatch({ type: TYPES.SET_USER, payload: data })
    navigation.goBack()
  }
  return (
    <PageWrapper>
      <UserForm
        onSubmit={onUserEdit}
        onError={(error) => console.log('error', error)}
      />
    </PageWrapper>
  )
}

export default withRouteOptions({ title: 'Profile Edit' })(UserEdit)
