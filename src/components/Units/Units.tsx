import React, { useCallback } from 'react'
import styles from './Units.module.css'
import { Unit } from '../Unit/Unit'
import { v4 } from 'uuid'

interface IUnit {
  id: string
  iconName: string
  title: string
  description: string
}

const initialUnits: IUnit[] = [{ id: v4(), iconName: 'face', title: 'Hi', description: 'description' }]

export const Units: React.FC = () => {
  const handleItemClick = useCallback((id: string) => {
    console.log(id)
  }, [])
  const renderItem = useCallback(
    ({ id, iconName, title, description }: IUnit) => {
      return (
        <Unit
          key={id}
          id={id}
          iconName={iconName}
          title={title}
          description={description}
          onIconClick={handleItemClick}
        />
      )
    },
    [handleItemClick]
  )

  return <div className={styles.wrapper}>{initialUnits.map(renderItem)}</div>
}
