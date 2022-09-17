import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { styles } from '../theme'
import React from 'react'
import styled from 'styled-components'

type Props = {
  onclick?: () => void
}

type State = {
  counter: number
}

class CounterApp extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  render() {
    return (
      <Div_Wrapper>
        <Helmet>
          <title>Counter App</title>
        </Helmet>
        <Div_Calculator>
          <H1_Counter>{this.state.counter}</H1_Counter>
          <div>
            <Styled_Button
              onClick={() => {
                this.setState({ counter: this.state.counter + 1 })
              }}
            >
              +
            </Styled_Button>
            <Styled_Button
              onClick={() => {
                this.setState({ counter: this.state.counter - 1 })
              }}
            >
              -
            </Styled_Button>
          </div>
        </Div_Calculator>
      </Div_Wrapper>
    )
  }
}

export const Div_Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${styles.color.main};
  @media (max-width: ${styles.breakingPoints.s}) {
    min-height: calc(100vh-40px);
  }
`

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
  border: 2px solid ${styles.color.black};
  background: ${styles.color.darkBlue};
`
const H1_Counter = styled.h1`
  text-align: center;
  width: 105px;
  background: ${styles.color.lightblue};
  border: 2px solid ${styles.color.black};
  border-radius: 10px;
  margin-bottom: 10px;
`
const Styled_Button = styled.button`
  font-size: 30px;
  width: 50px;
  height: 50px;
  margin: 5px;
  background: ${styles.color.brown};
  border-radius: 10px;
  transition: 0.5s;
  &:hover {
    background-color: ${styles.color.darkBrown};
  }
`
export { CounterApp }
