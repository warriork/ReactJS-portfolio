import { BlogApp } from './blogApp/BlogApp'
import { HackerTyper } from './hacker-typer/HackerTyper'
import { Homepage } from './Homepage/Homepage'
import { HttpFilterApp } from './httpFilter/HttpFilterApp'
import { Provider } from 'react-redux'
import { Link, Route, Routes } from 'react-router-dom'
import { MemoryGame } from './MemoryGame/MemoryGame'
import { Layout } from './Layout'
import { MortgageCalculator } from './MortgageCalculator/MortgageCalculator'
import { TodoApp } from './Todo/TodoApp'
import { urls } from './urls'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import store from './store/store'

export const App = () => {
  return (
    <Provider store={store}>
      <Global />
      <Routes>
        <Route path={urls.layout} element={<Layout />}>
          <Route path={urls.homepage} element={<Homepage />} />
          <Route path={urls.todoApp} element={<TodoApp />} />
          <Route path={urls.mortgageCalculator} element={<MortgageCalculator />} />
          <Route path={urls.hackerTyper} element={<HackerTyper />} />
          <Route path={urls.memoryGame} element={<MemoryGame />} />
          <Route path={urls.httpFilter} element={<HttpFilterApp />} />
          <Route path={urls.blogAppWithNestedChildren} element={<BlogApp />} />
        </Route>
      </Routes>
    </Provider>
  )
}

const Global = createGlobalStyle`
  * {
    font-family: Roboto, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
