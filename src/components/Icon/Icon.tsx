import React from 'react'

interface IIconProps {
  name: string
}

const InternalIcon: React.FC<IIconProps> = ({ name }) => <span className="material-icons">{name}</span>

export const Icon = React.memo(InternalIcon)
