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
    headingProps = DEFAULT_HEADING_PROPS,
    action
  } = props

  return (
    <Box
      flex={1}
      justifyContent={alignMiddle && 'center'}
      py={8}
      {...contentWrapperProps}>
      <Box flexDirection="row" mb={headingProps.mb}>
        <Box flex={1}>
          <Box>
            <Text
              variant={`h${headingProps.titleSize ?? 1}`}
              textAlign={headingProps.textAlign}>
              {headingProps.text}
            </Text>
          </Box>
          {headingProps.subTitle && <Text>{headingProps.subTitle}</Text>}
        </Box>
        {action && <Box>{action}</Box>}
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
  }),
  action: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default PageWrapper
