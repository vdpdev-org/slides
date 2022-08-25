import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Box } from '@mui/material'
import { Unit } from '../Unit/Unit'
import { Form } from 'react-final-form'
import { IUnitEditorFormSubmit, IUnitEditorFormValues } from './types'
import { TextField } from '../TextField/TextField'

export interface IUnitEditorProps {
  isOpen: boolean
  onCloseRequest: () => void
  onFormSubmit: IUnitEditorFormSubmit
  onCancel: () => void
  initialValues: IUnitEditorFormValues
}

export const UnitEditor: React.FC<IUnitEditorProps> = ({ isOpen, onCloseRequest, onFormSubmit, onCancel, initialValues }) => {
  return (
    <Form<IUnitEditorFormValues>
      onSubmit={onFormSubmit}
      initialValues={initialValues}
      render={({ handleSubmit, values }) => {
        return (
          <Dialog open={isOpen} onClose={onCloseRequest}>
            <form onSubmit={handleSubmit}>
              <DialogTitle>Edit unit</DialogTitle>
              <DialogContent>
                <DialogContentText>Edit Unit in a live mode and see how it would look like.</DialogContentText>
                <Box p={2}>
                  <Box mx="auto">
                    <Unit id="liveExample" title={values.title} iconName={values.iconName} description={values.description} />
                  </Box>
                  <TextField name="iconName" margin="dense" label="Icon Name" type="text" fullWidth autoFocus variant="standard" />
                  <TextField name="title" margin="dense" label="Title" type="text" fullWidth autoFocus variant="standard" />
                  <TextField name="description" margin="dense" label="Description" type="text" fullWidth autoFocus variant="standard" />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={onCancel}>Cancel</Button>
                <Button type="submit">Submit</Button>
              </DialogActions>
            </form>
          </Dialog>
        )
      }}
    />
  )
}
