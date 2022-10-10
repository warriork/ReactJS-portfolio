import { BlogApp } from './blogApp/BlogApp'
import { CounterApp } from './CounterApp/CounterApp'
import { HackerTyper } from './hacker-typer/HackerTyper'
import { Homepage } from './Homepage/Homepage'
import { HttpFilterApp } from './httpFilter/HttpFilterApp'
import { JShistory } from './JShistory/JShistory'
import { Layout } from './Layout'
import { Link, Route, Routes } from 'react-router-dom'
import { MemoryGame } from './MemoryGame/MemoryGame'
import { MortgageCalculator } from './MortgageCalculator/MortgageCalculator'
import { TodoApp } from './Todo/TodoApp'
import { urls } from './urls'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const App = () => {
  return (
    <>
      <Global />
      <Routes>
        <Route path={urls.layout} element={<Layout />}>
          <Route path={urls.homepage} element={<Homepage />} />
          <Route path={urls.jsHistory} element={<JShistory />} />
          <Route path={urls.counterApp} element={<CounterApp />} />
          <Route path={urls.todoApp} element={<TodoApp />} />
          <Route path={urls.mortgageCalculator} element={<MortgageCalculator />} />
          <Route path={urls.hackerTyper} element={<HackerTyper />} />
          <Route path={urls.memoryGame} element={<MemoryGame />} />
          <Route path={urls.httpFilter} element={<HttpFilterApp />} />
          <Route path={urls.blogAppWithNestedChildren} element={<BlogApp />} />
        </Route>
      </Routes>
    </>
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
