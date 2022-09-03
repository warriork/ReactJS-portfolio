import { Burger } from './Burger'
import { Link_Styled } from '../Link_Styled'
import { NavLink, Outlet } from 'react-router-dom'
import { styles } from '../../theme'
import { urls } from '../../urls'
import React, { useState } from 'react'
import styled from 'styled-components'
type Props = {
  isOpen: boolean
  onClick?: () => void
}
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(prevState => !prevState)
  }
  return (
    <>
      <Burger isOpen={isOpen} onClick={handleClick} />
      <Nav_Styled isOpen={isOpen}>
        <Link_Router onClick={() => setIsOpen(false)} to={urls.homepage}>
          Home
        </Link_Router>
        <Link_Router onClick={() => setIsOpen(false)} to={urls.jsHistory}>
          JavaScript history
        </Link_Router>
        <Link_Router onClick={() => setIsOpen(false)} to={urls.counterApp}>
          Counter app
        </Link_Router>
        <Link_Router onClick={() => setIsOpen(false)} to={urls.todoApp}>
          Todo app
        </Link_Router>
        <Link_Router onClick={() => setIsOpen(false)} to={urls.mortgageCalculator}>
          Mortgage calculator
        </Link_Router>
        <Link_Router onClick={() => setIsOpen(false)} to={urls.hackerTyper}>
          Hacker Typer
        </Link_Router>
        <Link_Router onClick={() => setIsOpen(false)} to={urls.memoryGame}>
          Memory game
        </Link_Router>
        <Link_Router onClick={() => setIsOpen(false)} to={urls.httpFilter}>
          Memory game
        </Link_Router>
      </Nav_Styled>
    </>
  )
}

const Nav_Styled = styled.nav<Props>`
  width: 100%;
  height: 40px;
  background: ${styles.color.layout};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 2px solid black;
  @media (max-width: ${styles.breakingPoints.s}) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    transform: ${props => (props.isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 9;
    width: 80vw;
    border: none;
  }
`
const Link_Router = styled(NavLink)`
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
  background: ${props => (props.className === 'active' ? styles.color.layoutActive : 'none')};
  &:hover {
    background: ${styles.color.layoutActive};
  }
`
