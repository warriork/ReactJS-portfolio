import { Link_Styled } from '../components/Link_Styled'
import { styles } from '../theme'
import { urls } from '../urls'
import React from 'react'
import historyLogo from './history.png'
import jsLogo from './jsLogo.png'
import styled from 'styled-components'
export const JShistory = () => {
  return (
    <>
      <Section_Styled>
        <H1_Styled> Javascript history</H1_Styled>
        <Paragraph_Styled>
          JavaScript, often abbreviated JS, is a programming language that is one of the core
          technologies of the World Wide Web, alongside HTML and CSS.
          <br /> As of 2022, 98% of websites use JavaScript on the client side for web page
          behavior, often incorporating third-party libraries. All major web browsers have a
          dedicated JavaScript engine to execute the code on users devices.
        </Paragraph_Styled>
      </Section_Styled>
      <Section_Styled>
        <H2_Styled> Timeline of a JS development</H2_Styled>
        <table>
          <thead>
            <Tr_Styled>
              <Th_Styled>Year</Th_Styled>
              <Th_Styled>Browser</Th_Styled>
            </Tr_Styled>
          </thead>
          <tbody>
            <Tr_Styled>
              <Td_Styled>1995</Td_Styled>
              <Td_Styled>
                JavaScript was invented by{' '}
                <Link_Styled href={urls.bredanEich}>Brendan Eich</Link_Styled>
              </Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>1996</Td_Styled>
              <Td_Styled>Netscape 2 was released with JavaScript 1.0</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>1997</Td_Styled>
              <Td_Styled>JavaScript became an ECMA standard</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>1997</Td_Styled>
              <Td_Styled>ECMAScript 1 was released</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>1998</Td_Styled>
              <Td_Styled>IE 4 was the first browser to support ES1</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>1998</Td_Styled>
              <Td_Styled>ECMAScript 2 was released</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>1998</Td_Styled>
              <Td_Styled>Netscape 42 was released with JavaScript 1.3</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>1999</Td_Styled>
              <Td_Styled>IE 5 was the first browser to support ES2</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>1999</Td_Styled>
              <Td_Styled>ECMAScript 3 was released</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2000</Td_Styled>
              <Td_Styled>IE 5.5 was the first browser to support ES3</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2000</Td_Styled>
              <Td_Styled>Netscape 62 was released with JavaScript 1.5</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2000</Td_Styled>
              <Td_Styled>Firefox 1 was released with JavaScript 1.5</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2008</Td_Styled>
              <Td_Styled>ECMAScript 4 was abandoned</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2009</Td_Styled>
              <Td_Styled>ECMAScript 5 was released</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2011</Td_Styled>
              <Td_Styled>IE 9 was the first browser to support ES5</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2011</Td_Styled>
              <Td_Styled>Firefox 4 was released with JavaScript 1.8.5</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2012</Td_Styled>
              <Td_Styled>Full support for ES5 in Safari 6</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2012</Td_Styled>
              <Td_Styled>Full support for ES5 in IE 10</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2012</Td_Styled>
              <Td_Styled>Full support for ES5 in Chrome 23</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2013</Td_Styled>
              <Td_Styled> Full support for ES5 in Firefox 21</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2013</Td_Styled>
              <Td_Styled>Full support for ES5 in Opera 15</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2014</Td_Styled>
              <Td_Styled>Full support for ES5 in all browsers</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2015</Td_Styled>
              <Td_Styled>ECMAScript 6 was released</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2016</Td_Styled>
              <Td_Styled>Full support for ES6 in Chrome 51</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2016</Td_Styled>
              <Td_Styled>Full support for ES6 in Opera 38</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2016</Td_Styled>
              <Td_Styled>Full support for ES6 in Edge 14</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2016</Td_Styled>
              <Td_Styled>Full support for ES6 in Safari 10</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2016</Td_Styled>
              <Td_Styled>Full support for ES6 in Firefox 52</Td_Styled>
            </Tr_Styled>
            <Tr_Styled>
              <Td_Styled>2018</Td_Styled>
              <Td_Styled>
                Full support for ES6 in all browsers except The Internet Explorer 11
              </Td_Styled>
            </Tr_Styled>
          </tbody>
        </table>
      </Section_Styled>
    </>
  )
}
const Section_Styled = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const H1_Styled = styled.h1`
  text-align: center;
  &::before {
    content: '';
    display: inline-block;
    background-size: 22px 22px;
    width: 22px;
    height: 22px;
    background-image: url(${jsLogo});
  }
`

const H2_Styled = styled.h2`
  text-align: center;
  &::before {
    content: '';
    display: inline-block;
    background-size: 22px 22px;
    width: 22px;
    height: 22px;
    background-image: url(${jsLogo}});
  }
`
const Paragraph_Styled = styled.p`
  padding: 10px 20px;
  max-width: 940px;
  line-height: 1.5;
`
const Th_Styled = styled.th`
  font-weight: bold;
  padding: 5px 10px;
  background-color: ${styles.color.grey};
`
const Td_Styled = styled.td`
  padding: 5px 10px;
`
const Tr_Styled = styled.tr`
  &:nth-of-type(2n) td {
    background-color: ${styles.color.grey};
  }
`
