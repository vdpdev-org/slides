import React, { useCallback, useState } from 'react'
import { SlideEditor } from './SlideEditor'
import { v4 } from 'uuid'
import { IUnit } from './types'

const initialUnits: IUnit[] = [{ id: v4(), iconName: 'face', title: 'Hi', description: 'description' }]

export const SlideEditorController = () => {
  const [isSlideEditorOpen, setIsSlideEditorOpen] = useState(false)
  const openModal = useCallback(() => {
    setIsSlideEditorOpen(true)
  }, [])
  const closeModal = useCallback(() => {
    setIsSlideEditorOpen(false)
  }, [])
  const handleSubmitEditing = useCallback(() => {
    closeModal()
  }, [closeModal])
  const onUnitClick = useCallback(() => {
    openModal()
  }, [openModal])

  return (
    <SlideEditor
      units={initialUnits}
      isSlideEditorOpen={isSlideEditorOpen}
      closeModal={closeModal}
      submitEditing={handleSubmitEditing}
      onUnitClick={onUnitClick}
    />
  )
}
