import { styles } from '../theme'
import React from 'react'
import styled from 'styled-components'

type Props = {
  todo: {
    id: string
    complete: boolean
    task: string
  }
  toggleTask: (e: any) => void
  removeTask: (e: any) => void
}

const Todo = ({ todo, toggleTask, removeTask }: Props) => {
  return (
    <div key={todo.id} className='item-todo'>
      <div
        className={todo.complete ? 'item-text strike' : 'item-text'}
        onClick={() => toggleTask(todo.id)}
      >
        {todo.task}
      </div>
      <div className='item-delete' onClick={() => removeTask(todo.id)}></div>
    </div>
  )
}

export { Todo }
