import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { styles } from '../theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type Todo = {
  id: number
  text: string
  isComplete: boolean
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (userInput: string) => {
    if (userInput) {
      const newTodo = {
        id: Math.floor(Math.random() * 10000),
        text: userInput,
        isComplete: false,
      }
      setTodos([newTodo, ...todos])
    }
  }

  const removeTodo = (id: number) => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }
  const handleToggle = (id: number) => {
    setTodos([
      ...todos.map(todo =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : { ...todo }
      ),
    ])
  }

  return (
    <>
      <Div_Container>
        <H1_Styled>todos: {todos.length}</H1_Styled>

        <TodoForm addTodo={addTodo} />
        {todos.map(todo => {
          return (
            <Todo todo={todo} key={todo.id} toggleTodo={handleToggle} removeTodo={removeTodo} />
          )
        })}
      </Div_Container>
    </>
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
export { TodoApp }
