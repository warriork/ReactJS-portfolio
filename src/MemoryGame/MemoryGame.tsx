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

export const MemoryGame = () => {
  const getShuffledCards = (cards: string[]) => {
    const shuffledCards = getShuffledArray([...cards, ...cards]).map(card => ({
      id: generateID(),
      img: card,
      isMatched: false,
    }))
    setCardsBoard(shuffledCards)
    setTurns(0)
  }

  const [cardsBoard, setCardsBoard] = useState([] as Card[])
  const [turns, setTurns] = useState(0)
  const [firstChoice, setFirstChoice] = useState(null as Card | null)
  const [secondChoice, setSecondChoice] = useState(null as Card | null)
  const [disabled, setDisabled] = useState(false)
  const handleChoice = async (card: Card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)
  }
  const resetTurn = () => {
    setFirstChoice(null)
    setSecondChoice(null)
    setTurns(turns => turns + 1)
    setDisabled(false)
  }
  useEffect(() => {
    if (firstChoice && secondChoice) {
      setDisabled(true)
      if (firstChoice.img === secondChoice.img) {
        setCardsBoard(
          cardsBoard.map(card =>
            card.img === firstChoice.img ? { ...card, isMatched: true } : card
          )
        )
        resetTurn()
      } else {
        setTimeout(() => resetTurn(), 1000)
      }
    }
  }, [firstChoice, secondChoice])
  return (
    <Div_Wrapp>
      <h1>Memory game</h1>
      <button onClick={() => getShuffledCards(cards)}>New Game</button>
      <Div_Gameboard>
        {cardsBoard.map((card: Card) => (
          <SingleCard
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            isFlipped={card === firstChoice || card === secondChoice || card.isMatched}
            disabled={disabled}
          />
        ))}
      </Div_Gameboard>
      <p>Turns: {turns}</p>
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
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`
