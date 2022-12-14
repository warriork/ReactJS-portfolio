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
const Div_HeaderContainer = styled.header`
  height: 40px;
  width: 100%;
  background: ${styles.color.layout};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid black;
  @media (max-width: ${styles.breakingPoints.s}) {
    display: none;
  }
`
const Link_Router = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${styles.color.white};
  text-decoration: none;
  cursor: pointer;
  height: 40px;
  padding: 0 20px;
  background: none;
  transition: 0.5s ease-in-out;
  &:hover {
    background: ${styles.color.layoutActive};
  }
`
const Div_Wrapper = styled.div`
  min-height: calc(100vh - 80px);
  @media (max-width: ${styles.breakingPoints.s}) {
    min-height: calc(100vh - 40px);
  }
`
const Footer_Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${styles.color.layout};
  height: 40px;
  width: 100%;
  border-top: 2px solid black;
`
const Paragraph_Styled = styled.p`
  line-height: 1.2;
  color: ${styles.color.white};
  text-align: center;
`
