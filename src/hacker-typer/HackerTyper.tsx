import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { StringDecoder } from 'string_decoder'
import { access } from 'fs/promises'
import { code } from './code'
import { styles } from '../theme'
import React, { useState } from 'react'
import styled from 'styled-components'

type Access = 'denied' | 'granted' | null

export const HackerTyper = () => {
  const [pointerIndex, setPointerIndex] = useState(0)
  const [accessMsg, setAccessMsg] = useState<Access>(null)

  const welcomeMsg = `To begin, start typing on your keyboard and your hacker code will immediately appear.To enhance your experience, press Shift or Enter`

  return (
    <Div_Wrapper>
      <Textarea_Styled
        spellCheck={false}
        autoFocus={true}
        value={pointerIndex === 0 ? welcomeMsg : code.slice(0, pointerIndex)}
        onKeyDown={e => {
          if(e.key === 'Shift'){
             setAccessMsg('denied')}
            else if( e.key === 'Enter')
            { setAccessMsg('granted')}
            else if( e.key === 'Escape')
            { setAccessMsg(null)}
            else if (e.key && pointerIndex < code.length){
             setPointerIndex(pointerIndex + Math.floor(Math.random() * 4 + 3))}
        }}
      ></Textarea_Styled>
      <Div_Banner access={accessMsg}>
        <h2>Access {accessMsg}</h2>
      </Div_Banner>
    </Div_Wrapper>
  )
}

const Textarea_Styled = styled.textarea`
  display: block;
  width: 100%;
  height: 100vh;
  background: ${styles.color.black};
  resize: none;
  font-family: ${styles.fontFamily.courier};
  color: ${styles.color.consoleGreen};
  line-height: 1.2rem;
  padding: 10px;
  overflow: hidden;
`
const Div_Banner = styled.div<{ access: Access }>`
  display: ${props => (props.access ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: ${styles.color.black};
  color: ${props =>
    props.access === 'granted' ? styles.color.consoleGreen : styles.color.consoleRed};
  border: 1px solid
    ${props => (props.access === 'granted' ? styles.color.consoleGreen : styles.color.consoleRed)};
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 120px;
  width: 250px;
  font-family: ${styles.fontFamily.courier};
  text-transform: uppercase;
`
