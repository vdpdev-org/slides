import React, { useEffect } from 'react'
import styles from './DragAndDropSorter.module.css'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../Unit/consts'
import { DropArea } from './DropArea'
import { Icon } from '../Icon/Icon'
import clsx from 'clsx'
import { buildAfterKey, buildBeforeKey, buildKeyFromAfterKey, getKeyFromBeforeKey, isKeyDropBefore } from './utils'
import { DropResult } from './interfaces'

interface IOnDropItemHandlerParams {
  fromId: string
  toId: string
  position: 'before' | 'after'
}

export type IOnDropItemHandler = (params: IOnDropItemHandlerParams) => void

export interface IDragAndDropSorterProps {
  id: string
  children: React.ReactNode
  onDrop: IOnDropItemHandler
  onDragStart: (itemId: string) => void
  onDragEnd: () => void
  isSomeOneDragging: boolean
  isDropBeforeVisible: boolean
  isDropAfterVisible: boolean
}

export const DragAndDropSorter: React.FC<IDragAndDropSorterProps> = ({
  id,
  children,
  onDrop,
  onDragStart,
  onDragEnd,
  isSomeOneDragging,
  isDropBeforeVisible,
  isDropAfterVisible
}) => {
  const [{ isDragging, item }, dragRef] = useDrag({
    type: ItemTypes.BOX,
    item: { id },
    end: (source, monitor) => {
      onDragEnd()
      const target = monitor.getDropResult<DropResult>()
      if (source && target) {
        const shouldBeDroppedBefore = isKeyDropBefore(target.id)
        onDrop({
          fromId: source.id,
          toId: shouldBeDroppedBefore ? getKeyFromBeforeKey(target.id) : buildKeyFromAfterKey(target.id),
          position: shouldBeDroppedBefore ? 'before' : 'after'
        })
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      item: monitor.getItem(),
      handlerId: monitor.getHandlerId()
    })
  })
  useEffect(() => {
    if (isDragging) {
      onDragStart(item.id)
    }
  }, [isDragging, item, onDragStart])

  return (
    <div ref={dragRef} className={styles.dropAreaWrapper}>
      {isSomeOneDragging && !isDragging && (
        <>
          {!isDropBeforeVisible && (
            <DropArea id={buildBeforeKey(id)} className={clsx(styles.dropArea, styles.dropAreaBefore)}>
              <Icon name="arrow_back" />
            </DropArea>
          )}
          {!isDropAfterVisible && (
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
