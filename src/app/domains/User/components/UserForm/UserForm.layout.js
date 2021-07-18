import React from 'react'
import PropTypes from 'prop-types'
import { useForm, Controller } from 'react-hook-form'
import moment from 'moment'
import { Box, Button, Col, Row, Upload } from '@qonsoll/react-native-design'
import { useSession } from '~/app/contexts/Session'
import { DatePicker, Input } from '~/components'

const UserForm = (props) => {
  const { onSubmit, onError } = props

  // [ADDITIONAL_HOOKS]
  const { session } = useSession()
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: session.userData, mode: 'onChange' })
  return (
    <>
      <Box mb={20}>
        <Upload allowUploadPhoto onUpload={(data) => console.log(data)} />
      </Box>
      <Row mb={20}>
        <Col flexDirection="column" pr={8}>
          <Controller
            control={control}
            rules={{
              required: 'Enter your name!'
            }}
            render={({ field: { onChange, onBlur, value } }) => (
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
            name="firstName"
          />
        </Col>
        <Col flexDirection="column">
          <Controller
            control={control}
            rules={{
              required: 'Enter your second name!'
            }}
            render={({ field: { onChange, onBlur, value } }) => (
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
            name="secondName"
          />
        </Col>
      </Row>
      <Box mb={20}>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
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
          name="email"
        />
      </Box>
      <Box mb={20}>
        <Controller
          control={control}
          rules={{
            required: 'Enter your weight!'
          }}
          render={({ field: { onChange, onBlur, value } }) => (
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
          name="weight"
        />
      </Box>
      <Box mb={20}>
        <Controller
          control={control}
          rules={{
            required: 'Enter your birthday!'
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <DatePicker
              label="Birthday"
              placeholder="Enter your birthday"
              onConfirm={(date) => onChange(moment(date).unix() * 1000)}
              onBlur={onBlur}
              value={new Date(value)}
              error={errors?.birthday?.message}
              formattedValue={moment(value).format('MMMM Do YYYY')}
            />
          )}
          name="birthday"
        />
      </Box>
      <Box flex={1} flexDirection="row">
        <Box flex={1} alignSelf="flex-end">
          <Button onPress={handleSubmit(onSubmit, onError)}>Save</Button>
        </Box>
      </Box>
    </>
  )
}

UserForm.propTypes = { onSubmit: PropTypes.func, onError: PropTypes.func }

export default UserForm
