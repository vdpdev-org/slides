import React, { useCallback } from 'react'
import styles from './Units.module.css'
import { IUnitProps, Unit } from '../Unit/Unit'
import { IUnit } from '../../pages/SlideEditor/types'

export interface IUnitsProps {
  units: IUnit[]
  onUnitClick: IUnitProps['onClick']
}

export const Units: React.FC<IUnitsProps> = ({ units, onUnitClick }) => {
  const renderItem = useCallback(
    ({ id, iconName, title, description }: IUnit) => {
      return <Unit key={id} id={id} iconName={iconName} title={title} description={description} onClick={onUnitClick} />
    },
    [onUnitClick]
  )

  return <div className={styles.wrapper}>{units.map(renderItem)}</div>
}
