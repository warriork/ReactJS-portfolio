import { styles } from '../theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type addTodoType = { addTodo: (text: string) => void }

export const TodoForm = (props: addTodoType) => {
  const [userInput, setUserInput] = useState('')

  return (
    <Form_Styled
      onSubmit={e => {
        e.preventDefault()
        props.addTodo(userInput)
        setUserInput('')
      }}
    >
      <Input_Styled
        value={userInput}
        type='text'
        onChange={e => setUserInput(e.currentTarget.value)}
        placeholder='What needs to be done?'
      />
      <Button_Styled>Add</Button_Styled>
    </Form_Styled>
  )
}

const Form_Styled = styled.form`
  border: 2px solid ${styles.color.grey};
  padding: 0 10px;
  border-radius: 10px;
  margin: 10px;
`
const Input_Styled = styled.input`
  border: none;
  line-height: 2rem;
  outline: none;
`

const Button_Styled = styled.button`
  height: 20px;
  padding: 5px;
  background: none;
  border: none;
  cursor: pointer;
  &:active {
    transform: translate(0, 3px);
  }
  transition: 0.2s;
`
