import React from 'react'
import styles from './Units.module.css'
import { Unit } from '../Unit/Unit'

export const Units: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Unit iconName="face" title="Hi" description="description" />
      <Unit iconName="face" title="Hi" description="description" />
      <Unit iconName="face" title="Hi" description="description" />
    </div>
  )
}
