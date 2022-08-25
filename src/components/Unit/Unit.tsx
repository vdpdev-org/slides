import React, { useCallback } from 'react'
import { Icon } from '../Icon/Icon'
import { Box, Typography } from '@mui/material'

export interface IUnitProps {
  id: string
  iconName: string
  title: string
  description: string
  onClick?: (id: string) => void
}

export const Unit: React.FC<IUnitProps> = ({ id, iconName, title, description, onClick }) => {
  const handleClick = useCallback(() => {
    onClick?.(id)
  }, [id, onClick])

  return (
    <Box p={2} display="flex" flexDirection="column" alignItems="center" onClick={handleClick}>
      <Icon name={iconName} />

      <Typography variant="body1">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
    </Box>
  )
}
