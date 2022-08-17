import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { StringDecoder } from 'string_decoder'
import { access } from 'fs/promises'
import { generateID } from '../utils'
import { styles } from '../theme'
import React, { useState } from 'react'
import card1 from './cards/1.png'
import card2 from './cards/2.png'
import card3 from './cards/3.png'
import card4 from './cards/4.png'
import card5 from './cards/5.png'
import card6 from './cards/6.png'
import card7 from './cards/7.png'
import card8 from './cards/8.png'
import cardCover from './cards/cover.png'
import styled from 'styled-components'

const cards = [card1, card2, card3, card4, card5, card6, card7, card8]

const shuffleCards = () => {
  return [...cards, ...cards]
    .map(card => ({ id: generateID(), img: card }))
    .sort(() => Math.random() - 0.5)
}
export const MemoryGame = () => {
  const [cardsBoard, setCardsBoard] = useState(shuffleCards())
  const [turns, setTurns] = useState(0)

  return <Div_Wrapper></Div_Wrapper>
}
