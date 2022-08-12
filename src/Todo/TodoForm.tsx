import React, { useState } from 'react'
function TodoForm({ addTask }: any) {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e: any) => {
    setUserInput(e.currentTarget.value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type='text'
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder='What needs to be done?'
      />
      <button>Add</button>
    </form>
  )
}

export { TodoForm }
