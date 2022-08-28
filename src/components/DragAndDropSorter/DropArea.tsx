import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Unit/consts'

interface IDropAreaProps {
  id: string
  className?: string
  children: React.ReactNode
}

export const DropArea: React.FC<IDropAreaProps> = ({ id, className, children }) => {
  const [{ canDrop, isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: () => ({ id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }))
  const isActive = canDrop && isOver
  let backgroundColor = ''
  if (isActive) {
    backgroundColor = 'darkgreen'
  }

  return (
    <div ref={dropRef} style={{ backgroundColor }} className={className}>
      {children}
    </div>
  )
}
