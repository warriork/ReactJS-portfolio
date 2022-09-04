import { Div_Wrapper } from '../components/Div_Wrapper'
import { filterUrl } from '../urls'
import React, { useState } from 'react'
import styled from 'styled-components'

type User = { id: string; name: string }

export const HttpFilterApp = () => {
  const [value, setValue] = useState('')
  const [data, setData] = useState([] as User[])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null as null | 'Server side error')

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    setError(null)
    setIsLoading(true)
    try {
      setIsLoading(true)
      const response = await fetch(filterUrl(value))
      if (!response.ok) throw Error
      setData(await response.json())
    } catch (err) {
      setError('Server side error')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Div_Wrapper>
      <h1>HTTP filter search</h1>
      <Input_Styled
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='Enter a name'
      ></Input_Styled>
      <DataList>
        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          data.map(item => <p key={item.id}>{item.name}</p>)
        )}
      </DataList>
    </Div_Wrapper>
  )
}

const Input_Styled = styled.input``
const DataList = styled.div``
