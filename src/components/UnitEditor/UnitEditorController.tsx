import * as React from 'react'
import { IUnitEditorProps, UnitEditor } from './UnitEditor'
import { IUnitEditorFormValues } from './types'

export interface IUnitEditorControllerProps extends Pick<IUnitEditorProps, 'isOpen' | 'onCloseRequest' | 'onCancel'> {
  unitIconName: string
  unitTitle: string
  unitDescription: string
  onSubmit: (values: IUnitEditorFormValues) => void
}

export const UnitEditorController: React.FC<IUnitEditorControllerProps> = ({
  unitIconName,
  unitTitle,
  unitDescription,
  onSubmit,
  isOpen,
  onCloseRequest,
  onCancel
}) => {
  const initialValues: IUnitEditorFormValues = {
    iconName: unitIconName,
    title: unitTitle,
    description: unitDescription
  }
  return (
    <UnitEditor initialValues={initialValues} onFormSubmit={onSubmit} isOpen={isOpen} onCloseRequest={onCloseRequest} onCancel={onCancel} />
  )
}
