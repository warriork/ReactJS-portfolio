import { Div_Wrapper } from '../components/Div_Wrapper'
import { Link } from 'react-router-dom'
import { styles } from '../theme'
import React from 'react'
import styled from 'styled-components'

type Props = {
  content: string
  onclick: () => void
}
type Btn = {
  content: string
}
type State = {
  counter: number
}

class Buttons extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <Div_Wrapper>
        <Div_Calculator>
          <H1_Counter>{this.state.counter}</H1_Counter>
          <div>
            <Button
              onClick={() => {
                this.setState({ counter: this.state.counter + 1 })
              }}
            >
              +
            </Button>
            <Button
              onClick={() => {
                this.setState({ counter: this.state.counter - 1 })
              }}
            >
              -
            </Button>
          </div>
        </Div_Calculator>
      </Div_Wrapper>
    )
  }
}

const Div_Calculator = styled.div`
  margin: 0 auto;
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: black;
`
const H1_Counter = styled.h1`
  text-align: center;
  width: 105px;
  background: ${styles.color.lightblue};
  border: 2px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
`
const Button = styled.button`
  font-size: 30px;
  width: 50px;
  height: 50px;
  margin: 5px;
  background: ${styles.color.darkBrown};
  border-radius: 10px;
`
export { Buttons }
