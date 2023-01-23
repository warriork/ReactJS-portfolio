import { Div_Wrapper } from '../components/Div_Wrapper'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { SingleCard } from './SingleCard'
import { StringDecoder } from 'string_decoder'
import { cards } from './cards.js'
import { generateID, getShuffledArray } from '../utils/helperFunctions'
import { styles } from '../theme'
import { timeout } from '../utils/helperFunctions'
import React, { useState } from 'react'
import bg_game from '../assets/bg_game.webp'
import cardCover from '../assets/cards/cover.png'
import styled from 'styled-components'

export type Card = {
  id: number
  img: string
  isMatched: boolean
}
type Turns = {
  isGameStarted: boolean
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
      <Helmet>
        <title>Pexeso</title>
      </Helmet>
      <H1_Styled isGameStarted={turns > 0}>Memory game</H1_Styled>
      <Turns_P isGameStarted={turns > 0}>Turns: {turns}</Turns_P>
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
    </Div_Wrapp>
  )
}

const Div_Wrapp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: 'black';
  min-height: calc(100vh - 40px);
  @media (max-width: ${styles.breakingPoints.s}) {
    min-height: 100vh;
  }
  padding-top: 20px;
  background: url(${bg_game});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const H1_Styled = styled.h1<Turns>`
  display: ${props => (props.isGameStarted ? 'none' : 'block')};
  color: ${styles.color.white};
  text-shadow: 5px 5px 8px ${styles.color.black};
  margin-bottom: 20px;
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
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  font-size: 1.2rem;
  border: 2px solid ${styles.color.white};
  border-radius: 10px;
  font-weight: 700;
  color: ${styles.color.white};
  text-shadow: 5px 5px 8px ${styles.color.black};
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:active {
    transform: translate(0, 2px);
  }

  &:hover {
    background-color: ${styles.color.layout};
  }
`
const Turns_P = styled.p<Turns>`
  display: ${props => (props.isGameStarted ? 'block' : 'none')};
  color: ${styles.color.white};
  font-size: 2em;
  text-shadow: 5px 5px 8px ${styles.color.black};
  margin-bottom: 20px;
  font-weight: 900;
`
