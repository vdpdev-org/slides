import React from 'react'
import { Field, FieldProps } from 'react-final-form'
import MuiTextField, { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField'

interface ITextFieldProps extends Partial<Omit<MuiTextFieldProps, 'type' | 'onChange'>> {
  name: string
  type?: string
  fieldProps?: Partial<FieldProps<any, any>>
}

export const TextField: React.FC<ITextFieldProps> = ({ name, type, fieldProps, ...rest }) => {
  return (
    <Field
      name={name}
      type={type}
      render={({ input }) => <MuiTextField name={name} type={type} value={input.value} onChange={input.onChange} {...rest} />}
      {...fieldProps}
    />
  )
}
