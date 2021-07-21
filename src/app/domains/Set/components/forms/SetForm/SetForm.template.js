import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useFieldArray } from 'react-hook-form'
import { Box, Button, Checkbox } from '@qonsoll/react-native-design'
import { Form } from '~/components'
import { SetView } from '~/app/domains/Set/components'
import { PARAMS } from '~/app/domains/Set/constants'

const SetForm = (props) => {
  const { onSubmit, onError, onDelete, edit, defaultValues } = props

  // [ADDITIONAL_HOOKS]
  const form = Form.useForm({ defaultValues })
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'params'
  })

  // [COMPONENT_STATE_HOOKS]
  const [loading, setLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)

  // [COMPUTED_PROPERTIES]
  const { handleSubmit } = form

  // [CLEAN_FUNCTIONS]
  const onFormSubmit = async (data) => {
    setLoading(true)
    await onSubmit?.(data)
    setLoading(false)
  }

  const onItemDelete = async () => {
    setDeleteLoading(true)
    await onDelete?.()
    setDeleteLoading(false)
  }

  return (
    <Box flex={1}>
      <Form form={form}>
        {Object.keys(PARAMS).map((type) => (
          <Form.Item
            key={type}
            name={type}
            defaultValue={false}
            shouldUnregister>
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
              disabled={deleteLoading}
              loading={loading}>
              {edit ? 'Save' : 'Create'}
            </Button>
            {edit && (
              <Button
                mt={8}
                variant="danger-light"
                onPress={onItemDelete}
                loading={deleteLoading}>
                Delete
              </Button>
            )}
          </Box>
        </Box>
      </Form>
    </Box>
  )
}

SetForm.propTypes = {
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  onDelete: PropTypes.func,
  edit: PropTypes.bool,
  defaultValues: PropTypes.object
}

export default SetForm
