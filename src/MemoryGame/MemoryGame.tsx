import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { SingleCard } from './SingleCard'
import { StringDecoder } from 'string_decoder'
import { access } from 'fs/promises'
import { cards } from './cards.js'
import { generateID, getShuffledArray } from '../utils'
import { styles } from '../theme'
import { timeout } from '../utils'
import React, { useEffect, useState } from 'react'
import bg_game from '../assets/bg_game.jpg'
import cardCover from '../assets/cards/cover.png'
import styled from 'styled-components'
export type Card = {
  id: number
  img: string
  isMatched: boolean
}
type Turns = {
  show: boolean
}

const getShuffledCards = (cards: string[]): Card[] => {
  return getShuffledArray([...cards, ...cards]).map(card => ({
    id: generateID(),
    img: card,
    isMatched: false,
  }))
}

export const MemoryGame = () => {
  const [cardsBoard, setCardsBoard] = useState([] as Card[])
  const [turns, setTurns] = useState(0)
  const [firstChoice, setFirstChoice] = useState(null as Card | null)
  const [secondChoice, setSecondChoice] = useState(null as Card | null)
  const [disabled, setDisabled] = useState(false)

  const resetTurn = () => {
    setFirstChoice(null)
    setSecondChoice(null)
    setTurns(turns => turns + 1)
    setDisabled(false)
  }

  const handleChoice = async (card: Card) => {
    if (firstChoice) {
      setSecondChoice(card)
    } else if (!firstChoice) {
      setFirstChoice(card)
    }
    if (firstChoice && firstChoice.id !== card.id) {
      setDisabled(true)
      if (firstChoice.img === card?.img) {
        setCardsBoard(prevCardsBoard =>
          prevCardsBoard.map(card =>
            card.img === firstChoice.img ? { ...card, isMatched: true } : card
          )
        )
        resetTurn()
      } else {
        await timeout(500)
        resetTurn()
      }
    }
  }

  return (
    <Div_Wrapp>
      <h1>Memory game</h1>
      <Button
        onClick={() => {
          setCardsBoard(getShuffledCards(cards))
          setTurns(0)
        }}
      >
        New Game
      </Button>
      <Div_Gameboard>
        {cardsBoard.map(card => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            isFlipped={card === firstChoice || card === secondChoice || card.isMatched}
            disabled={disabled}
          />
        ))}
      </Div_Gameboard>
      <Turns_P show={turns > 0}>Turns: {turns}</Turns_P>
    </Div_Wrapp>
  )
}

const Div_Wrapp = styled(Div_Wrapper)`
  background: url(${bg_game});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
const Div_Gameboard = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  margin-bottom: 10px;
`
const Button = styled.button`
  background: none;
  backdrop-filter: blur(5px);
  padding: 5px 10px;
  border: 2px solid ${styles.color.black};
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  &:active {
    transform: translate(0, 2px);
  }
  transition: 0.15s;
`
const Turns_P = styled.p<Turns>`
  display: ${props => (props.show ? 'block' : 'none')};
  font-weight: 700;
  backdrop-filter: blur(5px);
  padding: 10px 15px;
  border: 1px solid ${styles.color.black};
  border-radius: 5px;
`
