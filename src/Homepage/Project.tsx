import { MortgageCalculator } from '../MortgageCalculator/MortgageCalculator'
import { slugify } from '../utils/slugify'
import { styles } from '../theme'
import { urls } from '../urls'
import React from 'react'
import github from '../assets/svg/github.svg'
import styled from 'styled-components'

type Props = {
  name: string
  background: string
  label: string
  href: string
}

export const Project = (props: Props) => (
  <Div_Wrapper>
    <A_Styled href={props.href}>
      <A_Styled href={`${props.href}Github`} target='_blank'>
        <Github_Div>
          <Label>{props.label}</Label>
          <ProjectName_H3>{props.name}</ProjectName_H3>
          <SVG />
        </Github_Div>
      </A_Styled>
      <Div_Background background={props.background} />
    </A_Styled>
  </Div_Wrapper>
)

const Div_Wrapper = styled.div`
  margin: 10px;
  border: 2px solid ${styles.color.black};
  width: 300px;
  height: 300px;
  border-radius: 5px;
  transition: 0.5s;
  background-color: white;
  &:hover {
    transform: scale(1.05);
  }
`
type Bg = {
  background: string
}
const Div_Background = styled.div<Bg>`
  height: 253px;
  width: 296px;
  background: url(${props => props.background});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
`
const Github_Div = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${styles.color.grey};
`
const ProjectName_H3 = styled.h3`
  text-decoration: none;
`
const Label = styled.div`
  font-size: 14px;
  padding: 2px 7px;
  background-color: ${styles.color.layout};
  color: ${styles.color.white};
  font-weight: 700;
  border-radius: 15px;
`
const SVG = styled.svg`
  height: 20px;
  width: 20px;
  background-image: url(${github});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const A_Styled = styled.a`
  text-decoration: none;
  color: ${styles.color.black};
`
