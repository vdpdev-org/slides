import React from 'react'
import styles from './Unit.module.css'

interface IUnitProps {
  iconName: string
  title: string
  description: string
}

export const Unit: React.FC<IUnitProps> = ({ iconName, title, description }) => {
  return (
    <div className={styles.wrapper}>
      <span className="material-icons">{iconName}</span>
      <span>{title}</span>
      <span>{description}</span>
    </div>
  )
}
