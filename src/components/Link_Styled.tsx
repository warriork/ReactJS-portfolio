import { styles } from '../theme'
import React from 'react'
import styled from 'styled-components'

export const Link_Styled = styled.a`
  text-decoration: none;
  color: ${styles.color.blueviolet};
  cursor: pointer;
  &:hover {
    color: ${styles.color.green};
    text-decoration: underline;
  }
`
