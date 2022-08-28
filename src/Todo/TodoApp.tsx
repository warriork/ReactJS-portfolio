import { TodoList } from './TodoList'
import { generateID, removeRedundantSpacesRegExp, useLocalStorage } from '../utils/helperFunctions'
import { genericHookContextBuilder } from '../utils/createCustomContextHook'
import React, { useContext, useState } from 'react'

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
    todos.filter(todo =>
      filter === 'all'
        ? todo
        : filter === 'completed' && todo.isComplete
        ? todo
        : filter === 'active' && !todo.isComplete
        ? todo
        : null
    )
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
    <TodoContextProvider>
      <TodoList />
    </TodoContextProvider>
  )
}
