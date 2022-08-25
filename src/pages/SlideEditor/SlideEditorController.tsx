import React, { useCallback, useState } from 'react'
import { ISlideEditorProps, SlideEditor } from './SlideEditor'
import { v4 } from 'uuid'
import { IUnit } from './types'

const units: IUnit[] = [{ id: v4(), iconName: 'face', title: 'Hi', description: 'description' }]

const fallbackUnit: Omit<IUnit, 'id'> = {
  iconName: 'iconName',
  title: 'title',
  description: 'description'
}

export const SlideEditorController = () => {
  const [isSlideEditorOpen, setIsSlideEditorOpen] = useState(false)
  const [selectedUnitIndex, setSelectedUnitIndex] = useState(-1)
  const openModal = useCallback(() => {
    setIsSlideEditorOpen(true)
  }, [])
  const closeModal = useCallback(() => {
    setIsSlideEditorOpen(false)
  }, [])
  const handleSubmitEditing = useCallback<ISlideEditorProps['submitEditing']>(
    (values) => {
      console.log(values)
      closeModal()
    },
    [closeModal]
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
