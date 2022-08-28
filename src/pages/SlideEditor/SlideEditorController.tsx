import React, { useCallback, useState } from 'react'
import { ISlideEditorProps, SlideEditor } from './SlideEditor'
import { IUnit } from './types'
import { defaultUnits, fallbackUnit } from './consts'

// eslint-disable-next-line react/display-name
export const SlideEditorController = React.forwardRef<HTMLDivElement>(({}, ref) => {
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
  const onDrop = useCallback<ISlideEditorProps['onDrop']>(
    ({ fromId, toId, position }) => {
      const fromIndex = units.findIndex(({ id }) => id === fromId)
      const newUnits = [...units]
      const movingUnit = newUnits[fromIndex]
      newUnits.splice(fromIndex, 1)
      const toIndex = newUnits.findIndex(({ id }) => id === toId)
      const positionToInsertUnit = position === 'before' ? toIndex : Math.min(toIndex + 1, units.length)
      newUnits.splice(positionToInsertUnit, 0, movingUnit)

      setUnits(newUnits)
    },
    [units]
  )

  const selectedUnit: IUnit = units[selectedUnitIndex] || fallbackUnit

  return (
    <div ref={ref}>
      <SlideEditor
        units={units}
        isSlideEditorOpen={isSlideEditorOpen}
        closeModal={closeModal}
        submitEditing={handleSubmitEditing}
        onUnitClick={onUnitClick}
        unitIconName={selectedUnit.iconName}
        unitTitle={selectedUnit.title}
        unitDescription={selectedUnit.description}
        onDrop={onDrop}
      />
    </div>
  )
})
