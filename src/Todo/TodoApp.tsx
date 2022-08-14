import { Button_Styled } from '../components/Button_Styled'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { generateID } from '../utils'
import { styles } from '../theme'
import React, { useState } from 'react'
import styled from 'styled-components'

export type TodoType = {
  id: number
  text: string
  isComplete: boolean
}

export const TodoApp = () => {
  const [todos, setTodos] = useState<TodoType[]>(JSON.parse(localStorage.getItem('todos') || '[]'))
  const setTodosWithLocalStorage = (todos: TodoType[]) => {
    setTodos(todos)
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const [filter, setFilter] = useState(localStorage.getItem('filter') || 'all')
  const setFiltherWithLocalStorage = (value: string) => {
    setFilter(value)
    localStorage.setItem('filter', value)
  }
  const addTodo = (userInput: string) => {
    if (userInput) {
      const newTodo = {
        id: generateID(),
        text: userInput,
        isComplete: false,
      }
      setTodosWithLocalStorage([newTodo, ...todos])
    }
  }

  const removeTodo = (id: number) => setTodosWithLocalStorage(todos.filter(todo => todo.id !== id))

  const handleToggle = (id: number) => {
    setTodosWithLocalStorage(
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
        {todos.map((todo: TodoType) => renderTodo(todo, filter))}
        <Div_Buttons>
          <Button_Styled onClick={() => setFiltherWithLocalStorage('all')}>all</Button_Styled>
          <Button_Styled onClick={() => setFiltherWithLocalStorage('active')}>active</Button_Styled>
          <Button_Styled onClick={() => setFiltherWithLocalStorage('completed')}>
            completed
          </Button_Styled>
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
