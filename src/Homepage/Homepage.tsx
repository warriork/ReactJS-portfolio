import { Link } from 'react-router-dom'
import { Project } from './Project'
import { Rainbow_span } from '../components/Rainbow_span'
import { styles } from '../theme'
import { urls } from '../urls'
import React from 'react'
import avatar from '../assets/avatar.jpg'
import blogApp from '../assets/projects/blogApp.png'
import github from '../assets/svg/github.svg'
import hackerTyper from '../assets/projects/hackerTyper.png'
import linkedin from '../assets/svg/linkedin.svg'
import location from '../assets/svg/location.svg'
import mail from '../assets/svg/mail.svg'
import memoryGame from '../assets/projects/memoryGame.png'
import mortgageCalculator from '../assets/projects/mortgageCalculator.png'
import portfolio from '../assets/projects/portfolio.png'
import quotes from '../assets/projects/quotes.png'
import styled from 'styled-components'
import ticTacToe from '../assets/projects/ticTacToe.png'
import todoApp from '../assets/projects/todoApp.png'

export const Homepage = () => {
  return (
    <Div_Wrapper>
      <Avatar_Img src={avatar}></Avatar_Img>
      <H1_Styled>
        Hi, I am <Rainbow_span>Ihor Fesina</Rainbow_span>
      </H1_Styled>
      <Occupation_P>frontend developer</Occupation_P>
      <AboutMe_P>
        Passionate to learn and discover. Open to new challenges and have a strong desire to be the
        best in what I am doing.
      </AboutMe_P>

      <H2_Styled>Skills</H2_Styled>

      <Skills_Div>
        <Skill_Div>HTML</Skill_Div>
        <Skill_Div>CSS</Skill_Div>
        <Skill_Div>SCSS</Skill_Div>
        <Skill_Div>react styled components</Skill_Div>
      </Skills_Div>

      <Skills_Div>
        <Skill_Div>JS</Skill_Div>
        <Skill_Div>React JS</Skill_Div>
        <Skill_Div>Typescript</Skill_Div>
      </Skills_Div>
      <Skills_Div>
        <Skill_Div>GIT</Skill_Div>
        <Skill_Div>Github</Skill_Div>
        <Skill_Div>Gitlab</Skill_Div>
        <Skill_Div>JIRA</Skill_Div>
      </Skills_Div>
      <H2_Styled>Projects</H2_Styled>
      <Projects_Div>
        <Project
          name='Mortgage calculator'
          label='React'
          href={urls.mortgageCalculator}
          background={mortgageCalculator}
        />
        <Project name='Todo app' label='React' href={urls.todoApp} background={todoApp} />
        <Project
          name='Hacker typer'
          label='React'
          href={urls.hackerTyper}
          background={hackerTyper}
        />
        <Project name='Pexeso' label='React' href={urls.memoryGame} background={memoryGame} />
        <Project name='Blog' label='React' href={urls.blogApp} background={blogApp} />
        <Project name='Tic tac toe' label='JS' href={urls.ticTacToe} background={ticTacToe} />
        <Project name='Random quotes' label='JS' href={urls.qoutes} background={quotes} />
        <Project
          name='Photographer portfolio'
          label='JS'
          href={urls.portfolio}
          background={portfolio}
        />
      </Projects_Div>
      <H2_Styled>Contact me</H2_Styled>
      <Logos_wrapper>
        <Logo bg={mail} href={urls.myMail} />
        <Logo bg={linkedin} href={urls.myLinkedin} />
        <Logo bg={github} href={urls.myGithub} />
      </Logos_wrapper>
      <CV_Link href='../assets/IhorFesina_frontend.pdf'>Look at my PDF CV</CV_Link>
    </Div_Wrapper>
  )
}
const Div_Wrapper = styled.div`
  background-color: rgba(166, 222, 222, 0.51);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Avatar_Img = styled.img`
  margin-top: 20px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
`
const Occupation_P = styled.p`
  line-height: 2rem;
  font-weight: 900;
  font-size: 22px;
`
const H1_Styled = styled.h1`
  line-height: 3rem;
`
const H2_Styled = styled.h2`
  line-height: 3rem;
`
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
  line-height: 1.5rem;
  border-bottom: 2px solid ${styles.color.layoutActive};
`
const Projects_Div = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const List = styled.ul`
  list-style: none;
  max-width: 600px;
`

const Skills_Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 5px;
`
const Skill_Div = styled.div`
  padding: 5px 10px;
  background-color: ${styles.color.layout};
  color: ${styles.color.white};
  font-weight: 900;
  margin-right: 10px;
  border-radius: 15px;
`
const Location_p = styled.p``
const H3_Styled = styled.h3`
  border-bottom: 2px solid ${styles.color.black};
  margin-bottom: 10px;
`
const Date_p = styled.p``
const Div_flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const Logos_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  align-items: bottom;
  width: 160px;
`
type SVG = { bg: string }
const Logo = styled.a<SVG>`
  display: block;
  height: 40px;
  width: 40px;
  background-image: url(${props => props.bg});
  background-position: center center;
  background-size: contain;
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`
const P_about = styled.p`
  padding: 5px 0;
  font-size: 14px;
`
const A_Styled = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${styles.color.layoutActive};
  font-weight: 600;
`

const CV_Link = styled.a`
  display: block;
  height: 40px;
  width: 160px;
  background-color: ${styles.color.layout};
  text-decoration: none;
  color: white;
  text-align: center;
  line-height: 40px;
  border-radius: 15px;
  transition: 0.2s;
  margin-bottom: 30px;
  &:hover {
    transform: translateY(-5px);
    background-color: ${styles.color.layoutActive};
  }
`
