import React, { useCallback, useState } from 'react'
import { Box, IconButton, TextField, TextFieldProps, Typography } from '@mui/material'
import Done from '@mui/icons-material/Done'
import Cancel from '@mui/icons-material/Cancel'
import styles from './TitleEditor.module.css'

export const TitleEditor: React.FC = () => {
  const [title, setTitle] = useState('Insert a title here')
  const [editModeTitle, setEditModeTitle] = useState(title)
  const [isEditorEnabled, setIsEditorEnabled] = useState(false)

  const enableEditor = useCallback(() => {
    setIsEditorEnabled(true)
    setEditModeTitle(title)
  }, [title])
  const disableEditor = useCallback(() => {
    setIsEditorEnabled(false)
  }, [])
  const saveChanges = useCallback(() => {
    disableEditor()
    setTitle(editModeTitle)
  }, [disableEditor, editModeTitle])
  const handleChange = useCallback<NonNullable<TextFieldProps['onChange']>>((event) => {
    setEditModeTitle(event.target.value)
  }, [])

  return (
    <div>
      {isEditorEnabled ? (
        <Box display="flex" alignItems="center">
          <TextField fullWidth label="Title" variant="outlined" value={editModeTitle} onChange={handleChange} />
          <IconButton size="large" onClick={saveChanges}>
            <Done />
          </IconButton>
          <IconButton size="large" onClick={disableEditor}>
            <Cancel />
          </IconButton>
        </Box>
      ) : (
        <Typography align="center" variant="h4" onClick={enableEditor} className={styles.title}>
          {title}
        </Typography>
      )}
    </div>
  )
}
