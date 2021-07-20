import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Box, Button, Col, Row, Upload } from '@qonsoll/react-native-design'
import { DatePicker, Form, Input } from '~/components'
import { getTimestamp } from '~/services'

const UserForm = (props) => {
  const { onSubmit, onError, defaultValues } = props

  // [ADDITIONAL_HOOKS]
  const form = Form.useForm({
    defaultValues,
    mode: 'onChange'
  })

  // [COMPUTED_PROPERTIES]
  const {
    handleSubmit,
    formState: { errors }
  } = form

  return (
    <Form form={form}>
      <Form.Item
        rules={{
          required: 'Enter your name!'
        }}
        name="avatarURL">
        {({ field: { onChange, value } }) => (
          <Upload
            uri={value}
            allowUploadPhoto
            onUpload={(data) => {
              console.log(data)
              onChange?.()
            }}
          />
        )}
      </Form.Item>

      <Row>
        <Col flexDirection="column" pr={8}>
          <Form.Item
            rules={{
              required: 'Enter your name!'
            }}
            name="firstName">
            {({ field: { onChange, onBlur, value } }) => (
              <Input
                label="First name"
                placeholder="Enter your first name"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors?.firstName?.message}
                throwOnlyValueOnChange
              />
            )}
          </Form.Item>
        </Col>
        <Col flexDirection="column">
          <Form.Item
            rules={{
              required: 'Enter your second name!'
            }}
            name="secondName">
            {({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Second name"
                placeholder="Enter your second name"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors?.secondName?.message}
                throwOnlyValueOnChange
              />
            )}
          </Form.Item>
        </Col>
      </Row>
      <Form.Item
        rules={{
          required: true
        }}
        name="email">
        {({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Email"
            editable={false}
            placeholder="Enter your email"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            throwOnlyValueOnChange
          />
        )}
      </Form.Item>
      <Form.Item
        rules={{
          required: 'Enter your weight!'
        }}
        name="weight">
        {({ field: { onChange, onBlur, value } }) => (
          <Input
            label="Weight"
            placeholder="Enter your weight"
            keyboardType="numeric"
            onChange={onChange}
            onBlur={onBlur}
            error={errors?.weight?.message}
            value={value.toString()}
            throwOnlyValueOnChange
          />
        )}
      </Form.Item>
      <Form.Item
        rules={{
          required: 'Enter your birthday!'
        }}
        name="birthday">
        {({ field: { onChange, onBlur, value } }) => (
          <DatePicker
            label="Birthday"
            placeholder="Enter your birthday"
            onConfirm={(date) =>
              onChange(getTimestamp().fromDate(moment(date).toDate()))
            }
            onBlur={onBlur}
            value={moment(value.toDate()).toDate()}
            error={errors?.birthday?.message}
            formattedValue={moment(value.toDate()).format('MMMM Do YYYY')}
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

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  defaultValues: PropTypes.object
}

export default UserForm
