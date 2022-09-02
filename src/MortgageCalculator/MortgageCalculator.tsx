import { Button } from '../components/Button'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { calcMortgage } from './calcMortgageFunc'
import { styles } from '../theme'
import React, { useState } from 'react'
import styled from 'styled-components'

export const MortgageCalculator = () => {
  const [period, setPeriod] = useState(10)
  const [price, setPrice] = useState(3_000_000)
  const [firstPayment, setFirstPayment] = useState(0)
  const [rate, setRate] = useState(5)

  return (
    <Div_Container>
      <Helmet>
        <title>Motrage Calculator</title>
      </Helmet>
      <h1>Mortage calculator</h1>
      <form>
        <div>
          <Label_Styled htmlFor='price'>Enter a loan amount</Label_Styled>
          <Input_Number
            min={1_000_000}
            max={100_000_000}
            step={50_000}
            type='number'
            name='price'
            id='price'
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Input_Range
            min={1_000_000}
            max={100_000_000}
            step={50_000}
            type='range'
            name='price'
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
        </div>
        <div>
          <Label_Styled htmlFor='first-payment'>Enter a first payment amount</Label_Styled>
          <Input_Number
            min={0}
            max={100_000_000}
            step={50_000}
            type='number'
            name='firstPayment'
            id='price'
            value={firstPayment < price ? firstPayment : price}
            onChange={e => setFirstPayment(Number(e.target.value))}
          />
          <Input_Range
            min={0}
            max={price}
            step={50_000}
            type='range'
            name='firstPayment'
            value={firstPayment < price ? firstPayment : price}
            onChange={e => setFirstPayment(Number(e.target.value))}
          />
        </div>
        <div>
          <Label_Styled htmlFor='period'>Select a loan term </Label_Styled>
          <Input_Number
            min={5}
            max={40}
            step={1}
            type='number'
            name='period'
            id='period'
            value={period}
            onChange={e => setPeriod(Number(e.target.value))}
          />
          <Input_Range
            min={5}
            max={40}
            step={1}
            type='range'
            name='period'
            value={period}
            onChange={e => setPeriod(Number(e.target.value))}
          />
        </div>
        <div>
          <Label_Styled htmlFor='percentage'>Select a percentage rate</Label_Styled>
          <Input_Number
            min={1}
            max={20}
            step={0.1}
            type='number'
            name='percentage'
            id='percentage'
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
          />
          <Input_Range
            min={1}
            max={20}
            step={0.1}
            type='range'
            name='percentage'
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
          />
        </div>
      </form>
      <div>
        <H2_Styled>
          Your monthly payment is{' '}
          <span>{Math.round(calcMortgage({ rate, period, price, firstPayment }))}</span> kč for{' '}
          <span>{period}</span> years
        </H2_Styled>
      </div>
    </Div_Container>
  )
}

const Div_Container = styled(Div_Wrapper)`
  justify-content: flex-start;
  padding: 20px;
`
const Label_Styled = styled.label`
  display: block;
  line-height: 2rem;
  text-align: center;
`
const Input_Number = styled.input.attrs({ type: 'number' })`
  display: block;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5rem;
  border-radius: 5px;
  padding: 0 10px;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
const Input_Range = styled.input.attrs({ type: 'range' })`
  display: block;
  width: 100%;
  padding: 10px 0;
`
const H2_Styled = styled.h2`
  text-align: center;
  &:span {
    color: ${styles.color.red};
  }
`
