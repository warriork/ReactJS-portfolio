import { styles } from '../theme'
import React from 'react'
import styled from 'styled-components'

export const Link_Styled = styled.a`
  text-decoration: none;
  color: ${styles.color.white};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: ${styles.color.layoutFont};
    transform: scale(1.05);
  }
`
