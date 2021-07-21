import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { Menu, Text } from '@qonsoll/react-native-design'
import { SetView } from '~/app/domains/Set/components'
import { ROUTE_PATHS } from '~/constants'

const SetList = (props) => {
  const { data } = props

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()

  // [COMPUTED_PROPERTIES]
  const menuItems = data.map((set) => ({
    component: <SetListItem {...set} />,
    onPress: () => navigation.push(ROUTE_PATHS.SET_EDIT, { setData: set })
  }))

  return <Menu menuItems={menuItems} />
}

const SetListItem = (props) => {
  const { params } = props

  // [COMPUTED_PROPERTIES]
  const setParams = params.map(({ type }) => <SetView type={type} key={type} />)

  return setParams.map((item, index) => (
    <Fragment key={index}>
      {item}
      {index !== setParams.length - 1 && <Text mx={2}> / </Text>}
    </Fragment>
  ))
}

SetList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      params: PropTypes.arrayOf(
        PropTypes.shape({ type: PropTypes.string.isRequired })
      )
    })
  )
}

export default SetList
