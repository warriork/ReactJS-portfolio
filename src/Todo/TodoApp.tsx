import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { styles } from '../theme'
import React, { useState } from 'react'
import styled from 'styled-components'

function TodoApp() {
  const [todos, setTodos] = useState<any[]>([])

  const addTask = (userInput: string) => {
    if (userInput) {
      const newItem = {
        id: Math.floor(Math.random() * 10000),
        task: userInput,
        complete: false,
      }
      setTodos([...todos, newItem])
    }
  }

  const removeTask = (id: string) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }

  const handleToggle = (id: string) => {
    setTodos([
      ...todos.map(todo => (todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo })),
    ])
  }

  return (
    <div className='App'>
      <header>
        <h1>todos: {todos.length}</h1>
      </header>
      <TodoForm addTask={addTask} />
      {todos.map(todo => {
        return <Todo todo={todo} key={todo.id} toggleTask={handleToggle} removeTask={removeTask} />
      })}
    </div>
  )
}
export { TodoApp }
