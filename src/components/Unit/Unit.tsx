import React, { useCallback } from 'react'
import { Icon } from '../Icon/Icon'
import { Box, IconButton } from '@mui/material'

interface IUnitProps {
  id: string
  iconName: string
  title: string
  description: string
  onIconClick: (id: string) => void
}

export const Unit: React.FC<IUnitProps> = ({ id, iconName, title, description, onIconClick }) => {
  const handleClick = useCallback(() => {
    onIconClick(id)
  }, [id, onIconClick])

  return (
    <Box display="flex" flexDirection="column">
      <IconButton onClick={handleClick}>
        <Icon name={iconName} />
      </IconButton>

      <span>{title}</span>
      <span>{description}</span>
    </Box>
  )
}
