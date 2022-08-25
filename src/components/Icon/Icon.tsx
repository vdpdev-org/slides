import React from 'react'
import styles from './Icon.module.css'
import clsx from 'clsx'

interface IIconProps {
  name: string
}

const InternalIcon: React.FC<IIconProps> = ({ name }) => <span className={clsx('material-icons', styles.icon)}>{name}</span>

export const Icon = React.memo(InternalIcon)
