import React from 'react'
import PropTypes from 'prop-types'
import { useForm, FormProvider } from 'react-hook-form'
import FormItem from './FormItem'

const Form = (props) => {
  const { children, form, defaultValues } = props

  // [ADDITIONAL_HOOKS]
  const formInstance = useForm({ defaultValues })

  // [COMPUTED_PROPERTIES]
  const methods = form ?? formInstance

  return <FormProvider {...methods}>{children}</FormProvider>
}

Form.propTypes = { form: PropTypes.object }

Form.Item = FormItem
Form.useForm = useForm

export default Form
