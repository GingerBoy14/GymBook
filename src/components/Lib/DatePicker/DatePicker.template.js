import React, { useState } from 'react'
import { Pressable } from 'react-native'
import PropTypes from 'prop-types'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import Input from '../Inputs'

const DatePicker = (props) => {
  const {
    onConfirm,
    onCancel,
    children,
    pickerProps,
    formattedValue,
    value,
    ...rest
  } = props

  // [COMPONENT_STATE_HOOKS]
  const [isVisible, setIsVisible] = useState(false)

  // [CLEAN_FUNCTIONS]
  const showDatePicker = () => setIsVisible(true)

  const onPickerConfirm = (date) => {
    setIsVisible(false)
    onConfirm?.(date)
  }
  const onPickerCancel = () => {
    setIsVisible(false)
    onCancel?.()
  }

  return (
    <>
      <Pressable onPress={showDatePicker}>
        <Input
          {...rest}
          value={formattedValue}
          throwOnlyValueOnChange
          editable={false}
          onPressIn={showDatePicker}
        />
      </Pressable>
      <DateTimePickerModal
        isVisible={isVisible}
        onConfirm={onPickerConfirm}
        onCancel={() => onPickerCancel()}
        date={value}
        {...pickerProps}
      />
    </>
  )
}

DatePicker.propTypes = {
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  children: PropTypes.func
}

export default DatePicker
