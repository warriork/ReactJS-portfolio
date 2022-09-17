import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { styles } from '../theme'
import { urls } from '../urls'
import React from 'react'
import avatar from '../assets/avatar.jpg'
import styled from 'styled-components'

export const Homepage = () => {
  return (
    <Div_Wrapper>
      <Avatar_Img src={avatar}></Avatar_Img>
      <H1_Styled>Ihor Fesina - frontend developer</H1_Styled>
      <AboutMe_P>
        Passionate to learn and discover. Open to new challenges and have a strong desire to be the
        best in what I am doing.
      </AboutMe_P>
      <h2>Projects</h2>
      <Projects_Div></Projects_Div>
      <h2>Skills</h2>

      <List>
        <li>
          <strong>HTML, CSS, SCSS, React styled components</strong>
        </li>
        <li>
          <strong>JS, React JS, Typescript, NodeJS</strong>
        </li>
        <li>
          <strong>Version control:</strong> GIT, github, gitlab
        </li>
      </List>
      <h2>Education</h2>
      <h3>Courses</h3>
      <List>
        <li>
          <b>IT-absolvent </b>2022 <a>https://www.it-absolvent.cz/</a>
        </li>
        <li>
          <b>Rolling scopes school</b>2021 <a>https://rs.school/index.html</a>
        </li>
        <li>
          <b>Colt Steele Udemy Course</b>
        </li>
      </List>
      <h2>Languages</h2>
      <List>
        <li>
          <strong>English: </strong>
          Advanced
        </li>
        <li>
          <strong>Czech: </strong>Advanced
        </li>
        <li>
          <strong>Russian: </strong>Native speaker
        </li>
        <li>
          <strong>Ukrainian: </strong>Native speaker
        </li>
      </List>
      <h2>Contact me</h2>
    </Div_Wrapper>
  )
}
const Avatar_Img = styled.img`
  margin-top: 20px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`
const H1_Styled = styled.h1``
const Link_Styled = styled.a`
  font-style: italic;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  color: ${styles.color.fontDark};
  transition: 0.2s;
`
const AboutMe_P = styled.p`
  max-width: 425px;
`
const Projects_Div = styled.div``
const List = styled.ul`
  list-style: none;
`
