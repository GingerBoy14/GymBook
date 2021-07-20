import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Checkbox } from '@qonsoll/react-native-design'
import { useFieldArray } from 'react-hook-form'
import { SetView } from '~/app/domains/Set/components'
import { PARAMS } from '~/app/domains/Set/constants'
import { Form } from '~/components'

const SetForm = (props) => {
  const { onSubmit, onError } = props

  // [COMPONENT_STATE_HOOKS]
  const [loading, setLoading] = useState(false)

  // [ADDITIONAL_HOOKS]
  const form = Form.useForm()
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'params'
  })

  // [COMPUTED_PROPERTIES]
  const { handleSubmit } = form

  // [CLEAN_FUNCTIONS]
  const onFormSubmit = async (data) => {
    setLoading(true)
    await onSubmit?.(data)
    setLoading(false)
  }

  return (
    <Box flexDirection="column" flex={1}>
      <Form form={form}>
        {Object.keys(PARAMS).map((type) => (
          <Form.Item name={type} defaultValue={false} shouldUnregister>
            {({ field: { onChange, value } }) => (
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">
                <SetView type={type} variant="h3" size="lg" />
                <Checkbox
                  onValueChange={(checked) => {
                    if (checked) {
                      append({ type })
                    } else {
                      remove(fields.findIndex((field) => field.type === type))
                    }
                    onChange(checked)
                  }}
                  value={value}
                />
              </Box>
            )}
          </Form.Item>
        ))}
        <Box flex={1} flexDirection="row">
          <Box flex={1} alignSelf="flex-end">
            <Button
              onPress={handleSubmit(onFormSubmit, onError)}
              loading={loading}>
              Save
            </Button>
          </Box>
        </Box>
      </Form>
    </Box>
  )
}

SetForm.propTypes = { onSubmit: PropTypes.func, onError: PropTypes.func }

export default SetForm
