import React from 'react'
import PropTypes from 'prop-types'
import { useNavigation } from '@react-navigation/native'
import { Box, Menu, Text } from '@qonsoll/react-native-design'
import { ROUTE_PATHS } from '~/constants'

const ExerciseList = (props) => {
  const { data } = props

  // [ADDITIONAL_HOOKS]
  const navigation = useNavigation()

  // [COMPUTED_PROPERTIES]
  const menuItems = data.map((exercise) => ({
    component: <ExerciseListItem {...exercise} />,
    onPress: () =>
      navigation.push(ROUTE_PATHS.EXERCISE_EDIT, { name: exercise.name })
  }))

  return <Menu menuItems={menuItems} />
}

const ExerciseListItem = (props) => {
  const { name, muscles } = props

  // [COMPUTED_PROPERTIES]
  const musclesText = muscles.map((muscle) => muscle.name).join(', ')

  return (
    <Box>
      <Text fontWeight="semibold">{name}</Text>
      <Text fontSize="caption2">{musclesText}</Text>
    </Box>
  )
}

ExerciseList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      muscles: PropTypes.arrayOf(
        PropTypes.shape({ name: PropTypes.string.isRequired })
      )
    })
  )
}

export default ExerciseList
