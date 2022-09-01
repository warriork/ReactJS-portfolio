import { Button } from '../components/Button'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { TodosContext } from './TodoApp'
import { generateID, removeRedundantSpacesRegExp, useLocalStorage } from '../utils/helperFunctions'
import { genericHookContextBuilder } from '../utils/createCustomContextHook'
import { styles } from '../theme'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export function TodoList() {
  const logic = useContext(TodosContext)
  return (
    <Div_Container>
      <H1_Styled>todos</H1_Styled>
      <TodoForm />
      {logic.filteredTodos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
      <Div_Buttons>
        <Button onClick={() => logic.setFilter('all')}>all</Button>
        <Button onClick={() => logic.setFilter('active')}>active</Button>
        <Button onClick={() => logic.setFilter('completed')}>completed</Button>
      </Div_Buttons>
    </Div_Container>
  )
}

const H1_Styled = styled.h1`
  text-transform: uppercase;
  color: ${styles.color.red};
`

const Div_Container = styled.div`
  height: calc(100vh - 80px);
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
