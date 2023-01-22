import { Burger } from './components/header/Burger'
import { Link, Outlet } from 'react-router-dom'
import { Link_Styled } from './components/Link_Styled'
import { Navbar } from './components/header/Navbar'
import { styles } from './theme'
import { urls } from './urls'
import React from 'react'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Div_Wrapper>
        <Outlet />
      </Div_Wrapper>
    </div>
  )
}

const Div_Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  @media (max-width: ${styles.breakingPoints.s}) {
    min-height: calc(100vh - 40px);
  }
`
