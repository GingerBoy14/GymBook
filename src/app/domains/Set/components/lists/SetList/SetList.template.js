import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Menu, Text } from '@qonsoll/react-native-design'
import { ROUTE_PATHS } from '~/constants'
import { PARAMS as setParamIcons } from '~/app/domains/Set/constants'
import theme from '~/styles/theme'

const SetList = (props) => {
  const { data } = props

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()

  // [COMPUTED_PROPERTIES]
  const menuItems = data.map((set) => ({
    component: <SetListItem {...set} />,
    onPress: () => navigation.push(ROUTE_PATHS.SET_EDIT)
  }))

  return <Menu menuItems={menuItems} />
}

const SetListItem = (props) => {
  const { params } = props

  // [COMPUTED_PROPERTIES]
  const setParams = params.map(({ type }) => {
    const Icon = setParamIcons[type].icon

    return (
      <Box flexDirection="row" alignItems="center">
        <Box pr={4}>
          <Icon
            height={theme.CORE.ICON_SIZES.xs}
            width={theme.CORE.ICON_SIZES.xs}
          />
        </Box>

        <Text>{type}</Text>
      </Box>
    )
  })

  return setParams.map((item, index) => (
    <>
      {item}
      {index !== setParams.length - 1 && <Text mx={2}> / </Text>}
    </>
  ))
}

SetList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      muscles: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string.isRequired })
      )
    })
  )
}

export default SetList
