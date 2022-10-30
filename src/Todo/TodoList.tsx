import { Link } from 'react-router-dom'
import { Todo } from './Todo'
import { TodoForm } from './TodoForm'
import { TodosContext } from './TodoApp'
import { generateID, removeRedundantSpacesRegExp, useLocalStorage } from '../utils/helperFunctions'
import { genericHookContextBuilder } from '../utils/createCustomContextHook'
import { styles } from '../theme'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export const TodoList = () => {
  const logic = useContext(TodosContext)
  return (
    <Div_Container>
      <H1_Styled>todos</H1_Styled>
      <TodoForm />
      <Div_Buttons>
        <Button onClick={() => logic.setFilter('all')} filter={logic.filter}>
          all
        </Button>
        <Button onClick={() => logic.setFilter('active')} filter={logic.filter}>
          active
        </Button>
        <Button onClick={() => logic.setFilter('completed')} filter={logic.filter}>
          completed
        </Button>
      </Div_Buttons>
      {logic.filteredTodos.map(todo => (
        <Todo todo={todo} key={todo.id} />
      ))}
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
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`
const Div_Buttons = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 25px;
  align-items: center;
`

type Filter = {
  filter: 'all' | 'active' | 'completed'
  onClick?: () => void
}
const Button = styled.button<Filter>`
  padding: 2px 5px;
  background: none;
  border: none;
  cursor: pointer;
  /* &:active {
    transform: translate(0, 2px);
  } */
  transition: 0.2s;
  &:nth-child(${props => (props.filter === 'all' ? '1' : props.filter === 'active' ? '2' : '3')}) {
    font-weight: 900;
    color: ${styles.color.layout};
    border: 2px solid ${styles.color.layout};
    border-radius: 10px;
  }
`
