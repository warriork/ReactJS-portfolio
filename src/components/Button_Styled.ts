import React from 'react'
import styled from 'styled-components'

export const Button_Styled = styled.button`
  height: 20px;
  padding: 5px;
  background: none;
  border: none;
  cursor: pointer;
  &:active {
    transform: translate(0, 2px);
  }
  transition: 0.2s;
`
