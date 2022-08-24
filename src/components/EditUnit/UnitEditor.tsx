import React from 'react'
import TextField from '@mui/material/TextField'
import { Box } from '@mui/material'
import { Unit } from '../Unit/Unit'

export const UnitEditor: React.FC = () => {
  return (
    <Box p={2}>
      <Box mx="auto">
        <Unit id="s" title="asd" iconName="face" description="asd" />
      </Box>
      <TextField id="iconName" margin="dense" label="Icon Name" type="text" fullWidth autoFocus variant="standard" />
      <TextField id="title" margin="dense" label="Title" type="text" fullWidth autoFocus variant="standard" />
      <TextField
        id="description"
        margin="dense"
        label="description"
        type="text"
        fullWidth
        autoFocus
        variant="standard"
      />
    </Box>
  )
}
