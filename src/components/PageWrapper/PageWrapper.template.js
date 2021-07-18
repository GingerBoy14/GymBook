import React from 'react'
import { Box, Text } from '@qonsoll/react-native-design'
import PropTypes from 'prop-types'

const DEFAULT_HEADING_PROPS = {
  titleSize: 1
}
const DEFAULT_CONTENT_WRAPPER_PROPS = {
  mx: 8
}

const PageWrapper = (props) => {
  const {
    children,
    alignMiddle,
    contentWrapperProps = DEFAULT_CONTENT_WRAPPER_PROPS,
    headingProps = DEFAULT_HEADING_PROPS
  } = props

  return (
    <Box
      flex={1}
      justifyContent={alignMiddle && 'center'}
      pb={8}
      {...contentWrapperProps}>
      <Box mb={headingProps.mb}>
        <Box>
          <Text
            variant={`h${headingProps.titleSize ?? 1}`}
            textAlign={headingProps.textAlign}>
            {headingProps.text}
          </Text>
        </Box>
        {headingProps.subTitle && <Text>{headingProps.subTitle}</Text>}
      </Box>
      {children}
    </Box>
  )
}

PageWrapper.propTypes = {
  alignMiddle: PropTypes.bool,
  contentWrapperProps: PropTypes.object,
  headingProps: PropTypes.shape({
    text: PropTypes.string,
    mb: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    subTitle: PropTypes.string,
    textAlign: PropTypes.oneOf(['auto', 'left', 'right', 'center', 'justify']),
    titleSize: PropTypes.number,
    titleMarginBottom: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
}

export default PageWrapper
