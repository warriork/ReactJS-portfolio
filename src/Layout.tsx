import { Link, Outlet } from 'react-router-dom'
import { Link_Styled } from './components/Link_Styled'
import { styles } from './theme'
import { urls } from './urls'
import React from 'react'
import styled from 'styled-components'
export const Layout = () => {
  return (
    <>
      <Div_HeaderContainer>
        <Link_Router to={urls.homepage}>Home</Link_Router>
        <Link_Router to={urls.jsHistory}>JavaScript history</Link_Router>
        <Link_Router to={urls.counterApp}>Counter app</Link_Router>
        <Link_Router to={urls.todoApp}>Todo app</Link_Router>
        <Link_Router to={urls.mortgageCalculator}>Mortgage calculator</Link_Router>
        <Link_Router to={urls.hackerTyper}>Hacker Typer</Link_Router>
        <Link_Router to={urls.memoryGame}>Memory game</Link_Router>
      </Div_HeaderContainer>
      <Div_Wrapper>
        <Outlet />
      </Div_Wrapper>
      <Footer_Container>
        <Paragraph_Styled>
          Made by <Link_Styled href={urls.warriorkGitLab}>Ihor Fesina</Link_Styled>, a student of a{' '}
          <Link_Styled href={urls.itAbsolvent}>IT absolvent</Link_Styled>
        </Paragraph_Styled>
      </Footer_Container>
    </>
  )
}
const Div_HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const Link_Router = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${styles.color.green};
    transform: translate(0, -2px);
    transition: 0.5s;
    text-decoration: underline;
  }
`
const Div_Wrapper = styled.div`
  min-height: calc(100vh - 100px);
`
const Footer_Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 30px;
  width: 100%;
`
const Paragraph_Styled = styled.p`
  line-height: 1.2;
  color: white;
  text-align: center;
`
