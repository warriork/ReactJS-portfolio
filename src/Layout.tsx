import { JShistoryURL } from './routerPath'
import { Link, Outlet } from 'react-router-dom'
import { Link_Hover } from './components/Link_Hover'
import { styles } from './theme'
import { urls } from './urls'
import React from 'react'
import styled from 'styled-components'
export const Layout = () => {
  return (
    <>
      <Div_HeaderContainer>
        <Link_Styled to={JShistoryURL}>JavaScript history</Link_Styled>
      </Div_HeaderContainer>
      <Div_Wrapper>
        <Outlet />
      </Div_Wrapper>
      <Footer_Container>
        <Paragraph_Styled>
          Made by <Link_Footer href={urls.warriorkGitLab}>Ihor Fesina</Link_Footer>, a student of a{' '}
          <Link_Footer href={urls.itAbsolvent}>IT absolvent</Link_Footer>
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
const Link_Styled = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${styles.color.green};
    transform: translate(0, -2px);
    transition: 0.5s;
    &:hover {
      color: green;
      text-decoration: underline;
    }
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
  height: 50px;
  width: 100%;
`
const Paragraph_Styled = styled.p`
  line-height: 1.2;
  color: white;
  text-align: center;
`
const Link_Footer = styled(Link_Hover)`
  color: ${styles.color.brown};
  text-decoration: none;
  width: 940px;
  cursor: pointer;
    &:hover {
      transform: translate(0, -2px);
      transition: 0.5s;
    }
  } ;
`
