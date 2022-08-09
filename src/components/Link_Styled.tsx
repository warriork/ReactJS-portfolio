import { styles } from '../theme'
import React from 'react'
import styled from 'styled-components'

export const Link_Styled = styled.a`
  text-decoration: none;
  color: blueviolet;
  cursor: pointer;
  &:hover {
    color: green;
    text-decoration: underline;
  }
`
