import React from 'react'
import { Box, Button } from '@qonsoll/react-native-design'
import PropTypes from 'prop-types'
import { Form, Input } from '~/components'

const ExerciseForm = (props) => {
  const { onSubmit, onError, defaultValues } = props

  // [ADDITIONAL_HOOKS]
  const form = Form.useForm({ defaultValues })

  // [COMPUTED_PROPERTIES]
  const {
    handleSubmit,
    formState: { errors }
  } = form

  return (
    <Form form={form}>
      <Form.Item
        rules={{
          required: 'Enter exercise name'
        }}
        name="name">
        {({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Name"
            placeholder="Enter exercise name"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            error={errors?.secondName?.message}
            throwOnlyValueOnChange
          />
        )}
      </Form.Item>
      <Box flex={1} flexDirection="row">
        <Box flex={1} alignSelf="flex-end">
          <Button onPress={handleSubmit(onSubmit, onError)}>Save</Button>
        </Box>
      </Box>
    </Form>
  )
}

ExerciseForm.propTypes = {
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  defaultValues: PropTypes.object
}

export default ExerciseForm
