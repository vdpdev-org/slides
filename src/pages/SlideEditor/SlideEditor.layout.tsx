import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material'

interface ISlideEditorLayoutProps {
  children: React.ReactNode
  onPrintClick(): void
}

export const SlideEditorLayout: React.FC<ISlideEditorLayoutProps> = ({ children, onPrintClick }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Slides
          </Typography>
          <Button color="inherit" onClick={onPrintClick}>
            Print
          </Button>
        </Toolbar>
      </AppBar>
      {children}
    </div>
  )
}
