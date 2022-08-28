import React, { useEffect } from 'react'
import styles from './DragAndDropSorter.module.css'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../Unit/consts'
import { DropArea } from './DropArea'
import { Icon } from '../Icon/Icon'
import clsx from 'clsx'
import { buildAfterKey, buildBeforeKey, buildKeyFromAfterKey, getKeyFromBeforeKey, isKeyDropAfter, isKeyDropBefore } from './utils'
import { DropResult } from './interfaces'

interface IOnDropItemHandlerParams {
  source: string
  target: string
}

export type IOnDropItemHandler = ({ source, target }: IOnDropItemHandlerParams) => void

export interface IDragAndDropSorterProps {
  id: string
  children: React.ReactNode
  onDropBefore: IOnDropItemHandler
  onDropAfter: IOnDropItemHandler
  onDragStart: (itemId: string) => void
  onDragEnd: () => void
  isSomeOneDragging: boolean
  isDropBeforeDisabled: boolean
  isDropAfterDisabled: boolean
}

export const DragAndDropSorter: React.FC<IDragAndDropSorterProps> = ({
  id,
  children,
  onDropBefore,
  onDropAfter,
  onDragStart,
  onDragEnd,
  isSomeOneDragging,
  isDropBeforeDisabled,
  isDropAfterDisabled
}) => {
  const [{ isDragging, item }, dragRef] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { id },
    end: (source, monitor) => {
      onDragEnd()
      const target = monitor.getDropResult<DropResult>()
      if (source && target) {
        if (isKeyDropBefore(target.id)) {
          onDropBefore({ source: source.id, target: getKeyFromBeforeKey(target.id) })
        } else if (isKeyDropAfter(target.id)) {
          onDropAfter({ source: source.id, target: buildKeyFromAfterKey(target.id) })
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      item: monitor.getItem()
    })
  }))
  useEffect(() => {
    if (isDragging) {
      onDragStart(item.id)
    }
  }, [isDragging, item, onDragStart])
  const opacity = isDragging ? 0.4 : 1

  return (
    <div ref={dragRef} style={{ opacity }} className={styles.dropAreaWrapper}>
      {isSomeOneDragging && !isDragging && (
        <>
          {!isDropBeforeDisabled && (
            <DropArea id={buildBeforeKey(id)} className={clsx(styles.dropArea, styles.dropAreaBefore)}>
              <Icon name="arrow_back" />
            </DropArea>
          )}
          {!isDropAfterDisabled && (
            <DropArea id={buildAfterKey(id)} className={clsx(styles.dropArea, styles.dropAreaAfter)}>
              <Icon name="arrow_forward" />
            </DropArea>
          )}
        </>
      )}

      {children}
    </div>
  )
}
