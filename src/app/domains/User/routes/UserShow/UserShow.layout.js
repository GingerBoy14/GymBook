import React from 'react'
import { Text as RNText } from 'react-native'
import { Avatar, Box, Text } from '@qonsoll/react-native-design'
import { useSession } from '~/app/contexts/Session'
import { PageWrapper } from '~/components'

const UserShow = () => {
  // [ADDITIONAL_HOOKS]
  const { session } = useSession()

  // [COMPUTED_PROPERTIES]
  const { userData } = session

  return (
    <PageWrapper>
      <Box alignItems="center" mb={12}>
        <Avatar size="xxl" />
      </Box>
      <Box flexDirection="row" mb={12}>
        <Text fontWeight="bold">Name: </Text>
        <Text>
          {userData?.firstName} {userData?.secondName}
        </Text>
      </Box>
      <Box flexDirection="row" mb={12}>
        <Text fontWeight="bold">Email: </Text>
        <Text numberOfLines={1}>{userData?.email}</Text>
      </Box>
    </PageWrapper>
  )
}

export default UserShow
