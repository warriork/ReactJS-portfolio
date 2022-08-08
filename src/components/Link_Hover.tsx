import React from 'react'
import styled from 'styled-components'
export const Link_Hover = () => {
  return styled.a`
    &:hover {
      color: green;
      text-decoration: underline;
    }
  `
}
