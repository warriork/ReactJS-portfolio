import { JShistory } from './JShistory/JShistory'
import { JShistoryURL } from './routerPath'
import { Layout } from './layout/Layout'
import { Link, Route, Routes } from 'react-router-dom'
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

export const App = () => {
  return (
    <>
      <Global />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path={JShistoryURL} element={<JShistory />} />
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
