import React from 'react'
import PropTypes from 'prop-types'
import { Box, Spinner } from '@qonsoll/react-native-design'

const PageLoading = (props) => {
  const { loading, children } = props
  if (loading) {
    return (
      <Box flex={1} justifyContent="center">
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
