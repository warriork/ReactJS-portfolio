import { Button } from '../components/Button'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { generateID, useLocalStorage } from '../utils'
import { styles } from '../theme'
import React, { useState } from 'react'
import styled from 'styled-components'

export type TodoType = {
  id: number
  text: string
  isComplete: boolean
}

export const TodoApp = () => {
  const [todos, setTodos] = useLocalStorage('todos', [] as TodoType[])

  const [filter, setFilter] = useLocalStorage<'all' | 'active' | 'completed'>('filter', 'all')

  const addTodo = (userInput: string) => {
    if (!userInput) return
    setTodos([
      {
        id: generateID(),
        text: userInput,
        isComplete: false,
      },
      ...todos,
    ])
  }

  const removeTodo = (id: number) => setTodos(todos.filter(todo => todo.id !== id))

  const handleToggle = (id: number) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }))
    )
  }
  const renderTodo = (todo: TodoType, filter: string) => {
    return filter === 'all' ? (
      <Todo todo={todo} key={todo.id} toggleTodo={handleToggle} removeTodo={removeTodo} />
    ) : filter === 'completed' && todo.isComplete ? (
      <Todo todo={todo} key={todo.id} toggleTodo={handleToggle} removeTodo={removeTodo} />
    ) : filter === 'active' && !todo.isComplete ? (
      <Todo todo={todo} key={todo.id} toggleTodo={handleToggle} removeTodo={removeTodo} />
    ) : null
  }

  return (
    <Div_Container>
      <>
        <H1_Styled>todos</H1_Styled>
        <TodoForm addTodo={addTodo} />
        {todos.map(todo => renderTodo(todo, filter))}
        <Div_Buttons>
          <Button onClick={() => setFilter('all')}>all</Button>
          <Button onClick={() => setFilter('active')}>active</Button>
          <Button onClick={() => setFilter('completed')}>completed</Button>
        </Div_Buttons>
      </>
    </Div_Container>
  )
}
const H1_Styled = styled.h1`
  text-transform: uppercase;
  color: ${styles.color.red};
`

const Div_Container = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Div_Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
`
