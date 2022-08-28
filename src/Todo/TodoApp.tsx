import { Button } from '../components/Button'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { generateID, removeRedundantSpacesRegExp, useLocalStorage } from '../utils/helperFunctions'
import { genericHookContextBuilder } from '../utils/createCustomContextHook'
import { styles } from '../theme'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export type TodoType = {
  id: number
  text: string
  isComplete: boolean
}

const useLogicState = () => {
  const [todos, setTodos] = useLocalStorage('todos', [] as TodoType[])
  const [filter, setFilter] = useLocalStorage<'all' | 'active' | 'completed'>('filter', 'all')

  const addTodo = (userInput: string) => {
    if (!userInput || removeRedundantSpacesRegExp.test(userInput)) return
    setTodos([
      {
        id: generateID(),
        text: userInput,
        isComplete: false,
      },
      ...todos,
    ])
  }

  const removeTodo = (id: TodoType['id']) => setTodos(todos.filter(todo => todo.id !== id))

  const handleToggleTodo = (id: TodoType['id']): void => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }))
    )
  }
  const getFilteredTodos = () =>
    todos.filter(todo => {
      return filter === 'all'
        ? todo
        : filter === 'completed' && todo.isComplete
        ? todo
        : filter === 'active' && !todo.isComplete
        ? todo
        : null
    })
  return {
    todos,
    setTodos,
    filter,
    setFilter,
    addTodo,
    removeTodo,
    handleToggleTodo,
    getFilteredTodos,
  }
}

export const { ContextProvider: TodoContextProvider, Context: TodosContext } =
  genericHookContextBuilder(useLogicState)

export const TodoApp = () => {
  const logic = useContext(TodosContext)
  return (
    <Div_Container>
      <>
        <H1_Styled>todos</H1_Styled>
        <TodoForm />
        {logic.getFilteredTodos().map(todo => (
          <Todo todo={todo} key={todo.id} />
        ))}
        <Div_Buttons>
          <Button onClick={() => logic.setFilter('all')}>all</Button>
          <Button onClick={() => logic.setFilter('active')}>active</Button>
          <Button onClick={() => logic.setFilter('completed')}>completed</Button>
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
