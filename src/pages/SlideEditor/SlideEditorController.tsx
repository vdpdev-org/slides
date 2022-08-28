import React, { useCallback, useState } from 'react'
import { ISlideEditorProps, SlideEditor } from './SlideEditor'
import { IUnit } from './types'
import { defaultUnits, fallbackUnit } from './consts'

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
    [openModal, units]
  )
  const onDropBefore = useCallback<ISlideEditorProps['onDropBefore']>(({ source, target }) => {
    console.log(`Drop ${source} before ${target}`)
  }, [])
  const onDropAfter = useCallback<ISlideEditorProps['onDropAfter']>(({ source, target }) => {
    console.log(`Drop ${source} after ${target}`)
  }, [])
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
      onDropBefore={onDropBefore}
      onDropAfter={onDropAfter}
    />
  )
}
