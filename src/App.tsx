import { CounterApp } from './CounterApp/CounterApp'
import { JShistory } from './JShistory/JShistory'
import { Layout } from './Layout'
import { Link, Route, Routes } from 'react-router-dom'
import { urls } from './urls'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const App = () => {
  return (
    <>
      <Global />
      <Routes>
        <Route path={urls.layout} element={<Layout />}>
          <Route path={urls.jsHistory} element={<JShistory />} />
          <Route path={urls.counterApp} element={<CounterApp />} />
        </Route>
      </Routes>
    </>
  )
}

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
