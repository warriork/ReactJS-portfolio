import { JShistoryURL } from '../routerPath'
import { Link, Outlet } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
export const Layout = () => {
  return (
    <>
      <HeaderContainer>
        <StyledLink to={JShistoryURL}>JavaScript history</StyledLink>
      </HeaderContainer>
      <Div_Wrapper>
        <Outlet />
      </Div_Wrapper>
      <FooterContainer>
        <Paragraph>
          Made by <Hyperlink href='https://gitlab.com/warriork'>Ihor Fesina</Hyperlink>, a student
          of a <Hyperlink href='https://www.it-absolvent.cz/'>IT absolvent</Hyperlink>
        </Paragraph>
      </FooterContainer>
    </>
  )
}
const HeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  background: black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
const StyledLink = styled(Link)`
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
const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 50px;
  width: 100%;
`
const Paragraph = styled.p`
  line-height: 1.2;
  color: wheat;

  text-align: center;
`
const Hyperlink = styled.a`
  color: rgb(223, 177, 117);
  text-decoration: none;
  width: 940px;
  &:hover {
    color: green;
  }
`
