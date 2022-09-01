import { styles } from '../../theme'
import React from 'react'
import styled from 'styled-components'

type Props = {
  isOpen: boolean
  onClick?: () => void
}
export const Burger = (props: Props) => {
  return (
    <Burger_Styled isOpen={props.isOpen} onClick={props.onClick}>
      <div></div>
      <div></div>
      <div></div>
    </Burger_Styled>
  )
}

export const Burger_Styled = styled.button<Props>`
  display: none;
  @media (max-width: ${styles.breakingPoints.s}) {
    display: flex;
  }
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  position: absolute;
  top: 20px;
  right: 20px;

  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${styles.color.black};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    border: 1px solid white;

    :first-child {
      transform: ${props => (props.isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${props => (props.isOpen ? '0' : '1')};
      transform: ${props => (props.isOpen ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${props => (props.isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
