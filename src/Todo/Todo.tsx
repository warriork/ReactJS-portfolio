import { TodoType } from './TodoApp'
import { styles } from '../theme'
import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  todo: TodoType
  toggleTodo: (id: TodoType['id']) => void
  removeTodo: (id: TodoType['id']) => void
}
export const Todo = (props: Props) => {
  return (
    <Div_Todo key={props.todo.id}>
      <Div_Text isComplete={props.todo.isComplete} onClick={() => props.toggleTodo(props.todo.id)}>
        {props.todo.text}
      </Div_Text>
      <Div_Delete onClick={() => props.removeTodo(props.todo.id)}>x</Div_Delete>
    </Div_Todo>
  )
}
const Div_Todo = styled.div`
  display: flex;
  padding: 10px;
`
type TextProps = {
  isComplete: boolean
}

const Div_Text = styled.div<TextProps>`
  text-decoration: ${props => (props.isComplete ? 'line-through' : 'none')};
  color: ${props => (props.isComplete ? styles.color.grey : 'black')};
  line-height: 2rem;
  width: 160px;
  cursor: pointer;
`
const Div_Delete = styled.div`
  text-align: center;
  line-height: 2rem;
  padding: 0 10px;
  color: ${styles.color.red};
  width: 35px;

  cursor: pointer;
  &:hover {
    border: 2px solid ${styles.color.grey};
    border-radius: 50%;
  }
`
