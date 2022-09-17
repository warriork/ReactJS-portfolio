import { styles } from '../theme'
import React from 'react'
import styled from 'styled-components'

export const Div_Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${styles.color.main};
  @media (max-width: ${styles.breakingPoints.s}) {
    min-height: calc(100vh-40px);
  }
`
