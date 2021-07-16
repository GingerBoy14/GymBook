import React from 'react'
import { Menu, Text } from '@qonsoll/react-native-design'
import { PageWrapper } from '~/components'

const Settings = () => {
  const menuItems = [{ text: 'exercises' }, { text: 'muscule' }]
  return (
    <PageWrapper>
      <Menu menuItems={menuItems} />
    </PageWrapper>
  )
}

export default Settings
