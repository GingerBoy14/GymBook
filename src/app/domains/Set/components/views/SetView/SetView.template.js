import React from 'react'
import { Box, Text } from '@qonsoll/react-native-design'
import PropTypes from 'prop-types'
import { PARAMS as setParamIcons } from '~/app/domains/Set/constants'
import theme from '~/styles/theme'

const SetView = (props) => {
  const { type, size = 'xs', ...rest } = props
  const Icon = setParamIcons[type].icon

  //TODO fix text wrap if 5 item in row
  return (
    <Box flexDirection="row" alignItems="center">
      <Box pr={4}>
        <Icon
          height={theme.CORE.ICON_SIZES[size]}
          width={theme.CORE.ICON_SIZES[size]}
        />
      </Box>

      <Text {...rest}>{type}</Text>
    </Box>
  )
}

SetView.propTypes = {
  type: PropTypes.oneOf(Object.keys(setParamIcons)),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', 'xxl'])
}

export default SetView
