import { IUnit } from './types'

export const fallbackUnit: IUnit = {
  id: 'favorite',
  iconName: 'favorite',
  title: 'Insert text here',
  description: 'Add here your additional text'
}

export const defaultUnits: IUnit[] = [
  fallbackUnit,
  { id: 'pie_chart', iconName: 'pie_chart', title: 'Insert text here', description: 'Add here your additional text' },
  { id: 'thumb_up', iconName: 'thumb_up', title: 'Insert text here', description: 'Add here your additional text' }
]
