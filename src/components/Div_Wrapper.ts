import { styles } from '../theme'
import React from 'react'
import styled from 'styled-components'

export const Div_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: ${styles.color.main};
  @media (max-width: ${styles.breakingPoints.s}) {
    min-height: calc(100vh-40px);
  }
`
