import { Config } from 'final-form'

export interface IUnitEditorFormValues {
  iconName: string
  title: string
  description: string
}

export type IUnitEditorFormSubmit = Config<IUnitEditorFormValues>['onSubmit']
