import moment from 'moment'
import React from 'react'
import { Avatar, Box, Text } from '@qonsoll/react-native-design'
import { useSession } from '~/app/contexts/Session'
import { PageWrapper } from '~/components'

const UserShow = (props) => {
  const { avatar, ...rest } = props
  // [ADDITIONAL_HOOKS]
  const { session } = useSession()

  // [COMPUTED_PROPERTIES]
  const { userData } = session
  const birthday = moment(userData?.birthday).format('MMMM Do YYYY')

  if (avatar) {
    return (
      <Avatar
        size="xxl"
        uri={session.userData?.avatarURL}
        fullName={`${session.userData?.firstName} ${session.userData?.secondName}`}
        {...rest}
      />
    )
  }
  return (
    <PageWrapper>
      <Box alignItems="center" mb={12}>
        <Avatar
          size="xxl"
          uri={session.userData?.avatarURL}
          fullName={`${session.userData?.firstName} ${session.userData?.secondName}`}
        />
      </Box>
      <Box flexDirection="row" mb={12}>
        <Text fontWeight="bold">Name: </Text>
        <Text>
          {userData?.firstName} {userData?.secondName}
        </Text>
      </Box>
      <Box flexDirection="row" mb={12}>
        <Text fontWeight="bold">Birthday: </Text>
        <Text>{birthday}</Text>
      </Box>
      <Box flexDirection="row" mb={12}>
        <Text fontWeight="bold">Email: </Text>
        <Text numberOfLines={1}>{userData?.email}</Text>
      </Box>
    </PageWrapper>
  )
}

export default UserShow
