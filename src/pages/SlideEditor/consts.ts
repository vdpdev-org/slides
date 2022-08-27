import { IUnit } from './types'
import { v4 } from 'uuid'

export const fallbackUnit: IUnit = {
  id: v4(),
  iconName: 'face',
  title: 'Title',
  description: 'Description'
}

export const defaultUnits: IUnit[] = [fallbackUnit]
