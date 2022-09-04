import { Helmet } from 'react-helmet'
import { filterUrl } from '../urls'
import { isConstructorDeclaration } from 'typescript'
import { styles } from '../theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type User = { id: string; name: string }

export const HttpFilterApp = () => {
  const [data, setData] = useState([] as User[])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null as null | 'Server side error')

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null)
    setIsLoading(true)
    try {
      setIsLoading(true)
      const response = await fetch(filterUrl(e.target.value))
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
      <Helmet>
        <title>HTTP Filter</title>
      </Helmet>

      <h1>HTTP filter search</h1>
      <Input_Styled type='text' onChange={handleChange} placeholder='Enter a name'></Input_Styled>
      <DataList>
        {isLoading ? (
          <P_Styled>Loading</P_Styled>
        ) : error ? (
          <P_Styled>{error}</P_Styled>
        ) : data.length === 0 ? (
          <P_Styled>No matches</P_Styled>
        ) : (
          data.map(item => <P_Styled key={item.id}>{item.name}</P_Styled>)
        )}
      </DataList>
    </Div_Wrapper>
  )
}

const Input_Styled = styled.input`
  border: 2px solid ${styles.color.black};
  border-radius: 5px;
  width: 200px;
  height: 30px;
  margin-top: 20px;
  font-size: 16px;
  padding-left: 5px;
`
const P_Styled = styled.p`
  line-height: 1.6rem;
`
const DataList = styled.div`
  width: 200px;
  padding: 10px;
`
const Div_Wrapper = styled.div`
  padding-top: 30px;
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: ${styles.color.main};
  @media (max-width: ${styles.breakingPoints.s}) {
    min-height: calc(100vh-40px);
  }
`
