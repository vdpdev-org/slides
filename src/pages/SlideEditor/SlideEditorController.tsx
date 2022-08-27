import React, { useCallback, useState } from 'react'
import { ISlideEditorProps, SlideEditor } from './SlideEditor'
import { v4 } from 'uuid'
import { IUnit } from './types'

const fallbackUnit: IUnit = {
  id: v4(),
  iconName: 'face',
  title: 'Title',
  description: 'Description'
}

const defaultUnits: IUnit[] = [fallbackUnit]

export const SlideEditorController = () => {
  const [isSlideEditorOpen, setIsSlideEditorOpen] = useState(false)
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(-1)
  const [units, setUnits] = useState(defaultUnits)
  const openModal = useCallback(() => {
    setIsSlideEditorOpen(true)
  }, [])
  const closeModal = useCallback(() => {
    setIsSlideEditorOpen(false)
  }, [])
  const handleSubmitEditing = useCallback<ISlideEditorProps['submitEditing']>(
    (values) => {
      const selectedUnit = units[selectedUnitIndex]
      const newUnits = [...units]
      newUnits[selectedUnitIndex] = { id: selectedUnit.id, ...values }
      setUnits(newUnits)
      closeModal()
    },
    [closeModal, selectedUnitIndex, units]
  )
  const onUnitClick = useCallback<NonNullable<ISlideEditorProps['onUnitClick']>>(
    (unitId) => {
      const unitIndex = units.findIndex(({ id }) => id === unitId)
      if (unitIndex === -1) {
        return
      }

      setSelectedUnitIndex(unitIndex)
      openModal()
    },
    [openModal]
  )
  const selectedUnit: IUnit = units[selectedUnitIndex] || fallbackUnit

  return (
    <SlideEditor
      units={units}
      isSlideEditorOpen={isSlideEditorOpen}
      closeModal={closeModal}
      submitEditing={handleSubmitEditing}
      onUnitClick={onUnitClick}
      unitIconName={selectedUnit.iconName}
      unitTitle={selectedUnit.title}
      unitDescription={selectedUnit.description}
    />
  )
}
