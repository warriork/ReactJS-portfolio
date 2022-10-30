import { styles } from '../../theme'
import React from 'react'
import styled from 'styled-components'

type Props = React.HTMLAttributes<HTMLButtonElement>
export const DeleteBtn = (props: Props) => <Btn {...props}>x</Btn>

const Btn = styled.button`
  background: none;
  text-align: center;
  line-height: 2rem;
  padding: 0 10px;
  color: ${styles.color.red};
  width: 35px;
  border: 2px solid ${styles.color.white};
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    border: 2px solid ${styles.color.grey};
  }
`
