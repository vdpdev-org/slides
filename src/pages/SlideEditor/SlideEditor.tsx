import React from 'react'
import { IUnit } from './types'
import { Modal } from '../../components/Modal/Modal'
import { Units } from '../../components/Units/Units'
import { UnitEditor } from '../../components/EditUnit/UnitEditor'

interface ISlideEditorProps {
  units: IUnit[]
  isSlideEditorOpen: boolean
  closeModal: () => void
  submitEditing: () => void
  onUnitClick: () => void
}

export const SlideEditor: React.FC<ISlideEditorProps> = ({
  units,
  isSlideEditorOpen,
  closeModal,
  submitEditing,
  onUnitClick
}) => {
  return (
    <div>
      <Units units={units} onUnitClick={onUnitClick} />
      <Modal
        title="Edit unit"
        description="Edit Unit in a live mode and see how it would look like."
        isOpen={isSlideEditorOpen}
        onCancel={closeModal}
        onSubmit={submitEditing}
        onCloseRequest={closeModal}
      >
        <UnitEditor />
      </Modal>
    </div>
  )
}
