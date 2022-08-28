import React from 'react'
import { IUnit } from './types'
import { IUnitsProps, Units } from '../../components/Units/Units'
import { IUnitEditorControllerProps, UnitEditorController } from '../../components/UnitEditor/UnitEditorController'
import { TitleEditor } from '../../components/TitleEditor/TitleEditor'
import styles from './SlideEditor.module.css'

export interface ISlideEditorProps {
  units: IUnit[]
  isSlideEditorOpen: boolean
  closeModal: () => void
  submitEditing: IUnitEditorControllerProps['onSubmit']
  onUnitClick: IUnitsProps['onUnitClick']
  unitTitle: string
  unitDescription: string
  unitIconName: string
  onDrop: IUnitsProps['onDrop']
}

export const SlideEditor: React.FC<ISlideEditorProps> = ({
  units,
  isSlideEditorOpen,
  closeModal,
  submitEditing,
  onUnitClick,
  unitTitle,
  unitDescription,
  unitIconName,
  onDrop
}) => {
  return (
    <div className={styles.wrapper}>
      <TitleEditor />
      <Units units={units} onUnitClick={onUnitClick} onDrop={onDrop} />
      <UnitEditorController
        isOpen={isSlideEditorOpen}
        onCancel={closeModal}
        onSubmit={submitEditing}
        onCloseRequest={closeModal}
        unitTitle={unitTitle}
        unitDescription={unitDescription}
        unitIconName={unitIconName}
      />
    </div>
  )
}
