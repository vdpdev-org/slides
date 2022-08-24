import React, { useCallback } from 'react'
import styles from './Units.module.css'
import { Unit } from '../Unit/Unit'
import { IUnit } from '../../pages/SlideEditor/types'

interface IUnitProps {
  units: IUnit[]
  onUnitClick: () => void
}

export const Units: React.FC<IUnitProps> = ({ units, onUnitClick }) => {
  const renderItem = useCallback(
    ({ id, iconName, title, description }: IUnit) => {
      return <Unit key={id} id={id} iconName={iconName} title={title} description={description} onClick={onUnitClick} />
    },
    [onUnitClick]
  )

  return <div className={styles.wrapper}>{units.map(renderItem)}</div>
}
