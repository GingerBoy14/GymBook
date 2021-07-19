import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Box } from '@qonsoll/react-native-design'
import PropTypes from 'prop-types'


// TODO write proptypes
const FromItem = (props) => {
  const { children, ...rest } = props

  const { control } = useFormContext()

  return (
    <Box mb={20}>
      <Controller control={control} render={children} {...rest} />
    </Box>
  )
}

FromItem.propTypes = {}

export default FromItem
