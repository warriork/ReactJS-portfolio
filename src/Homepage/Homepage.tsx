import { AnimatedTyping } from '../components/typeAnimation/TypeAnimation'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Project } from './Project'
import { Rainbow_span } from '../components/Rainbow_span'
import { styles } from '../theme'
import { urls } from '../urls'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
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
import styled, { keyframes } from 'styled-components'
import ticTacToe from '../assets/projects/ticTacToe.png'
import todoApp from '../assets/projects/todoApp.png'

export const Homepage = () => {
  return (
    <Div_Wrapper>
      <Avatar_Img src={avatar} />
      <AnimatedTyping>Hello World! I am Ihor Fesina. Frontend developer 💻 </AnimatedTyping>
      <About_me>
        <Typography variant='h5' component='h2' textAlign='center'>
          Passionate to learn and discover. Open to new challenges and have a strong desire to be
          the best in what I am doing.
        </Typography>
      </About_me>
      <Typography variant='h4' component='h3' sx={{ padding: '20px' }}>
        Skills
      </Typography>

      <Skills_Div>
        <Skill_Div>HTML</Skill_Div>
        <Skill_Div>CSS</Skill_Div>
        <Skill_Div>SCSS</Skill_Div>
        <Skill_Div>React styled components</Skill_Div>
        <Skill_Div>JS</Skill_Div>
        <Skill_Div>React JS</Skill_Div>
        <Skill_Div>Redux</Skill_Div>
        <Skill_Div>Typescript</Skill_Div>
        <Skill_Div>GIT</Skill_Div>
        <Skill_Div>Github</Skill_Div>
        <Skill_Div>Gitlab</Skill_Div>
        <Skill_Div>JIRA</Skill_Div>
      </Skills_Div>
      <Typography variant='h4' component='h3' sx={{ padding: '20px' }}>
        Projects
      </Typography>
      <Projects_Div>
        <Project
          name='Pexeso'
          label='React'
          href='memoryGame'
          background={memoryGame}
          description={[
            'Pexeso a.k.a Memory game',
            'React, TypeScript, styled components and useState hook were used',
          ]}
        />
        <Project
          name='Blog'
          label='React'
          href='blogApp'
          background={blogApp}
          description={[
            'Application validates inputs while submitting a new article. You can see a list of created articles and a full article in Markdown. Each article have an unique URL. Articles are saved in a local storage.',
            'React,TypeScript, styled components, local storage, React context and useState hook were used',
          ]}
        />
        <Project
          name='Todo app'
          label='React'
          href='todoApp'
          background={todoApp}
          description={[
            'Todo application that allows you add and delete tasks. Tasks may be marked as done and filtered to display only active, completed or all tasks. All data is saved to a local storage',
            'React,TypeScript, styled components, local storage, React context and useState hook were used',
          ]}
        />
        <Project
          name='Hacker typer'
          label='React'
          href='hackerTyper'
          background={hackerTyper}
          description={[
            'A clone of a hacker typer app',
            'Start typing from a keyboard. Try to press a Shift or an Enter button',
            'React, TypeScript, styled components and useState hook were used',
          ]}
        />
        <Project
          name='Mortgage calculator'
          label='React'
          href='mortgageCalculator'
          background={mortgageCalculator}
          description={[
            'Application that allows you calculate a mortgage payment depending on parameters such as loan amount, percentage rate, loan term and the amount of the first payment.',
            'React, TypeScript, styled components and useState hook were used',
          ]}
        />
        <Project
          name='Photographer portfolio'
          label='JS'
          href='portfolio'
          background={portfolio}
          description={[
            'Portfolio for a photographer with a custom videoplayer made using a native JS. You can change language and choose a dark and white theme. Photos are changed by clicking on a differens season button',
            'JS and CSS were used',
          ]}
        />
        <Project
          name='Tic tac toe'
          label='JS'
          href='ticTacToe'
          background={ticTacToe}
          description={['Classic Tic tac toe game made in a native JS', 'JS and CSS were used']}
        />
        <Project
          name='Random quotes'
          label='JS'
          href='qoutes'
          background={quotes}
          description={[
            'Application show you a random quotes that fetch from an API. You can change language and choose a dark and white theme',
            'JS and CSS were used',
          ]}
        />
      </Projects_Div>
      <H2_Styled>Contact me</H2_Styled>
      <Logos_wrapper>
        <Logo bg={mail} href={urls.myMail} target='_blank' />
        <Logo bg={linkedin} href={urls.myLinkedin} target='_blank' />
        <Logo bg={github} href={urls.myGithub} target='_blank' />
      </Logos_wrapper>
      <Button
        href={urls.cvPDF}
        target='_blank'
        color='primary'
        variant='contained'
        startIcon={<CloudDownloadIcon />}
      >
        Download CV
      </Button>
    </Div_Wrapper>
  )
}
const appear = keyframes`
  from {
    transform: translateX(-10px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const Div_Wrapper = styled.div`
  background-color: #eae7dc;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
  animation: ${appear} 0.5s linear;
`

const Avatar_Img = styled.img`
  margin-top: 20px;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  animation: ${appear} 2s linear;
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
  padding: 0 5px;
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
  justify-content: center;
  max-width: 600px;
  padding: 5px;
`
const Skill_Div = styled.div`
  padding: 5px 10px;
  background-color: ${styles.color.layout};
  color: ${styles.color.white};
  font-weight: 900;
  margin: 5px;
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

const A_Styled = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: ${styles.color.layoutActive};
  font-weight: 600;
`
const About_me = styled.div`
  max-width: 660px;
  padding: 15px 30px;
  background: white;
  border-radius: 50px;
  @media screen and (max-width: 700px) {
    width: 100vw;
    border-radius: 0;
  }
`
