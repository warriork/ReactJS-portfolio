import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { styles } from '../theme'
import { urls } from '../urls'
import React from 'react'
import styled from 'styled-components'

export const Homepage = () => {
  return (
    <Div_Wrapper>
      <h1>Welcome!</h1>
      <p>
        There is a first <span>React app</span> of a{' '}
        <Link_Styled href={urls.warriorkGitLab}>Warriork</Link_Styled>
      </p>
    </Div_Wrapper>
  )
}

const Link_Styled = styled.a`
  font-style: italic;
  cursor: pointer;
  text-decoration: none;
  font-weight: 700;
  color: ${styles.color.fontDark};
  transition: 0.2s;
`
