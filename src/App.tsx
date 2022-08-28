import React from 'react'
import { SlideEditorController } from './pages/SlideEditor/SlideEditorController'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

export const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <SlideEditorController />
    </DndProvider>
  )
}
