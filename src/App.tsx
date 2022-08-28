import React from 'react'
import { SlideEditorController } from './pages/SlideEditor/SlideEditorController'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useReactToPrint } from 'react-to-print'

export const App = () => {
  const componentRef = React.createRef<HTMLDivElement>()
  const handlePrint = useReactToPrint({ content: () => componentRef.current })
  return (
    <DndProvider backend={HTML5Backend}>
      <SlideEditorController ref={componentRef} />
      <button onClick={handlePrint}>Print</button>
    </DndProvider>
  )
}
