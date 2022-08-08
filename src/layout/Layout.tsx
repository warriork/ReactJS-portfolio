import { JShistoryURL } from '../routerPath'
import { Link, Outlet } from 'react-router-dom'
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
          Made by <A_link href='https://gitlab.com/warriork'>Ihor Fesina</A_link>, a student of a{' '}
          <A_link href='https://www.it-absolvent.cz/'>IT absolvent</A_link>
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
    color: green;
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
  color: wheat;
  text-align: center;
`
const A_link = styled.a`
  color: rgb(223, 177, 117);
  text-decoration: none;
  width: 940px;
  &:hover {
    color: green;
  }
`
