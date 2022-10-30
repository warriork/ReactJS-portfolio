import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { Rainbow_span } from '../components/Rainbow_span'
import { styles } from '../theme'
import { urls } from '../urls'
import React from 'react'
import avatar from '../assets/avatar.jpg'
import github from '../assets/svg/github.svg'
import linkedin from '../assets/svg/linkedin.svg'
import mail from '../assets/svg/mail.svg'
import styled from 'styled-components'

export const Homepage = () => {
  return (
    <Div_Wrapper>
      <Avatar_Img src={avatar}></Avatar_Img>
      <H1_Styled>
        Hi, I am <Rainbow_span>Ihor</Rainbow_span>
      </H1_Styled>
      <p>frontend developer</p>
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
      <List>
        <li>
          <h3>Master of science</h3>
          Pardubice
          <>2020 - 2022</>
          <h4>Organic chemistry</h4>
          <p>
            Diploma project &lsquo;Optimalization of a robotic peptide synthesis&rsquo; is awarded
            with a prize by <a>Pfizer</a> as <a href={urls.pfizerPrize}>the best diploma project</a>
          </p>
        </li>
        <li>
          <h3>Bachelor of science</h3>
          Kyiv, Ukraine
          <>2015-2019</>
          <h4>Organic chemistry and technologies</h4>
        </li>
      </List>
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
      <h2>Employment history</h2>
      <List>
        <li>Organic chemist, peptide synthesis</li>
        <>9/2021-ongoing</>
        <>Part time, followed by full time starting 7/2022</>
        <li>Organic chemist, small molecules synthesis</li>
        <>10/2017-05/2019</>
        <>Part time, Kyiv, Ukraine</>
      </List>
      <h2>Contact me</h2>
      <Logo bg={mail} href={urls.myMail} />
      <Logo bg={linkedin} href={urls.myLinkedin} />
      <Logo bg={github} href={urls.myGithub} />
      <img src='https://www.codewars.com/users/warriork/badges/small' />
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
type SVG = { bg: string }
const Logo = styled.a<SVG>`
  display: block;
  height: 20px;
  width: 20px;
  background-image: url(${props => props.bg});
  background-position: center center;
  background-size: contain;
`
