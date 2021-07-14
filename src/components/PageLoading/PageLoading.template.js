import React from 'react'
import { Box, Spinner } from '@qonsoll/react-native-design'
import PropTypes from 'prop-types'

const PageLoading = (props) => {
  const { loading, children } = props
  if (loading) {
    return (
      <Box flex={1}>
        <Spinner />
      </Box>
    )
  }
  return children
}

PageLoading.propTypes = {
  loading: PropTypes.bool
}

export default PageLoading
