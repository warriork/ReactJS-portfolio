import { Button } from '../components/Button'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Helmet } from 'react-helmet'
import { Input, InputAdornment, InputLabel, Slider, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { calcMortgage } from './calcMortgageFunc'
import { styles } from '../theme'
import React, { useState } from 'react'
import bg from '../assets/mortgage_bg.webp'
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
      <Typography variant='h3' component='h1' sx={{ marginBottom: '20px' }}>
        Mortage calculator
      </Typography>
      <form>
        <div>
          <TextField
            sx={{ m: 1, width: '25ch' }}
            label='Loan amount'
            type='number'
            size='small'
            InputProps={{
              endAdornment: <InputAdornment position='end'>kč</InputAdornment>,
              inputProps: {
                min: 1000000,
                max: 100000000,
                step: 50000,
              },
            }}
            name='price'
            id='price'
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
          />
          <Slider
            size='small'
            min={1_000_000}
            max={100_000_000}
            step={50_000}
            name='price'
            value={price}
            defaultValue={1_000_000}
            onChange={e => setPrice(Number((e.target as HTMLInputElement).value))}
          />
        </div>
        <div>
          <TextField
            sx={{ m: 1, width: '25ch' }}
            label='First payment'
            type='number'
            size='small'
            InputProps={{
              endAdornment: <InputAdornment position='end'>kč</InputAdornment>,
              inputProps: {
                min: 0,
                max: price,
                step: 50000,
              },
            }}
            name='firstPayment'
            id='price'
            value={firstPayment < price ? firstPayment : price}
            onChange={e => setFirstPayment(Number(e.target.value))}
          />
          <Slider
            size='small'
            min={0}
            max={price}
            step={50_000}
            name='firstPayment'
            value={firstPayment < price ? firstPayment : price}
            onChange={e => setFirstPayment(Number((e.target as HTMLInputElement).value))}
          />
        </div>
        <div>
          <TextField
            sx={{ m: 1, width: '25ch' }}
            label='Loan term'
            type='number'
            size='small'
            InputProps={{
              endAdornment: <InputAdornment position='end'>years</InputAdornment>,
              inputProps: {
                min: 5,
                max: 40,
                step: 1,
              },
            }}
            name='period'
            id='period'
            value={period}
            onChange={e => setPeriod(Number(e.target.value))}
          />
          <Slider
            size='small'
            min={5}
            max={40}
            step={1}
            name='period'
            value={period}
            onChange={e => setPeriod(Number((e.target as HTMLInputElement).value))}
          />
        </div>
        <div>
          <TextField
            sx={{ m: 1, width: '25ch' }}
            label='Percentage rate'
            type='number'
            size='small'
            InputProps={{
              endAdornment: <InputAdornment position='end'>%</InputAdornment>,
              inputProps: {
                min: 2,
                max: 20,
                step: 0.1,
              },
            }}
            name='percentage'
            id='percentage'
            value={rate}
            onChange={e => setRate(Number(e.target.value))}
          />
          <Slider
            size='small'
            min={1}
            max={20}
            step={0.1}
            name='percentage'
            value={rate}
            onChange={e => setRate(Number((e.target as HTMLInputElement).value))}
          />
        </div>
      </form>
      <div>
        <Typography variant='h5'>
          Your monthly payment is{' '}
          <b>{Math.round(calcMortgage({ rate, period, price, firstPayment }))}</b> kč for{' '}
          <b>{period}</b> years
        </Typography>
      </div>
    </Div_Container>
  )
}

const Div_Container = styled(Div_Wrapper)`
  justify-content: flex-start;
  background-color: white;
  padding: 20px;
  background: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
`
