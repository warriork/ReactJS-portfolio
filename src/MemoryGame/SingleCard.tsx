import { Card } from './MemoryGame'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { access } from 'fs/promises'
import { cards } from './cards.js'
import { generateID } from '../utils'
import { styles } from '../theme'
import React, { useState } from 'react'
import cardCover from '../assets/cards/cover.png'
import styled from 'styled-components'

type CardProps = {
  disabled: boolean
  card: Card
  isFlipped: boolean
  handleChoice: (card: Card) => void
}
type ImgProps = {
  src: string
  isFlipped: boolean
}
export const SingleCard = (props: CardProps) => {
  return (
    <CardContainer_div>
      <Front_Img src={props.card.img} isFlipped={props.isFlipped} alt='card front' />
      <Back_Img
        src={cardCover}
        onClick={() => {
          if (props.disabled) return
          props.handleChoice(props.card)
        }}
        alt='card back'
        isFlipped={props.isFlipped}
      />
    </CardContainer_div>
  )
}

const CardContainer_div = styled.div`
  cursor: pointer;
  position: relative;
  height: 80px;
  width: 80px;
  padding: 5px;
  display: flex;
  justify-content: center;
  box-shadow: 5px 7px 7px black;
  border: 2px solid ${styles.color.black};
  border-radius: 5px;
  backdrop-filter: blur(5px);
`
const Front_Img = styled.img<ImgProps>`
  height: 70px;
  width: auto;
  display: block;
  position: absolute;
  transform: ${props => (props.isFlipped ? 'rotateY(0deg)' : 'rotateY(90deg)')};
  transition: all ease-in 0.2s;
  transition-delay: ${props => (props.isFlipped ? '0.2s' : '0s')};
`
const Back_Img = styled.img<ImgProps>`
  height: 70px;
  width: auto;
  display: block;
  transform: ${props => (props.isFlipped ? 'rotateY(90deg)' : 'rotateY(0deg)')};
  transition: all ease-in 0.2s;
  transition-delay: ${props => (props.isFlipped ? '0s' : '0.2s')};
`
