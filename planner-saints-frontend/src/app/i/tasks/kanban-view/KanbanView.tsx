'use client'

import { DragDropContext } from "@hello-pangea/dnd"
import { useTasks } from "../hooks/useTasks"

import { COLUMNS } from "../columns.data"
import { KanbanColumn } from "./KanbanColumn"
import { useTaskDnd } from "../hooks/useTaskDnd"
import styles from './KanbanView.module.scss'

export function KanbanView() {

  const { items, setItems } = useTasks()

  const { onDragEnd } = useTaskDnd()
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.board}>
        {COLUMNS.map(column => (
          <KanbanColumn
            items={items}
            label={column.label}
            value={column.value}
            setItems={setItems}
            key={column.value}
          />
        ))}
      </div>
    </DragDropContext>
  )
}