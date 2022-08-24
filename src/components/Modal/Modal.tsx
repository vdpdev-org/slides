import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface IModalProps {
  title: string
  description: string
  isOpen: boolean
  onCloseRequest: () => void
  onSubmit: () => void
  onCancel: () => void
  children: React.ReactNode
}

export const Modal: React.FC<IModalProps> = ({
  title,
  description,
  isOpen,
  onCloseRequest,
  onSubmit,
  onCancel,
  children
}) => {
  return (
    <Dialog open={isOpen} onClose={onCloseRequest}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        {children}
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel}>Cancel</Button>
        <Button onClick={onSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  )
}
