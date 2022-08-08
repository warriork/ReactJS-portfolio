import React from 'react'
import styled from 'styled-components'
export const JShistory = () => {
  return (
    <>
      <Section>
        <TitleMain> Javascript history</TitleMain>
        <Paragraph>
          JavaScript, often abbreviated JS, is a programming language that is one of the core
          technologies of the World Wide Web, alongside HTML and CSS.
          <br /> As of 2022, 98% of websites use JavaScript on the client side for web page
          behavior, often incorporating third-party libraries. All major web browsers have a
          dedicated JavaScript engine to execute the code on users devices.
        </Paragraph>
      </Section>
      <Section>
        <TitleSecondary> Timeline of a JS development</TitleSecondary>
        <table>
          <thead>
            <Tr>
              <Th>Year</Th>
              <Th>Browser</Th>
            </Tr>
          </thead>
          <tbody>
            <Tr>
              <Td>1995</Td>
              <Td>
                JavaScript was invented by{' '}
                <Hyperlink href='https://wikipedia.org/wiki/Brendan_Eich'>Brendan Eich</Hyperlink>
              </Td>
            </Tr>
            <Tr>
              <Td>1996</Td>
              <Td>Netscape 2 was released with JavaScript 1.0</Td>
            </Tr>
            <Tr>
              <Td>1997</Td>
              <Td>JavaScript became an ECMA standard</Td>
            </Tr>
            <Tr>
              <Td>1997</Td>
              <Td>ECMAScript 1 was released</Td>
            </Tr>
            <Tr>
              <Td>1998</Td>
              <Td>IE 4 was the first browser to support ES1</Td>
            </Tr>
            <Tr>
              <Td>1998</Td>
              <Td>ECMAScript 2 was released</Td>
            </Tr>
            <Tr>
              <Td>1998</Td>
              <Td>Netscape 42 was released with JavaScript 1.3</Td>
            </Tr>
            <Tr>
              <Td>1999</Td>
              <Td>IE 5 was the first browser to support ES2</Td>
            </Tr>
            <Tr>
              <Td>1999</Td>
              <Td>ECMAScript 3 was released</Td>
            </Tr>
            <Tr>
              <Td>2000</Td>
              <Td>IE 5.5 was the first browser to support ES3</Td>
            </Tr>
            <Tr>
              <Td>2000</Td>
              <Td>Netscape 62 was released with JavaScript 1.5</Td>
            </Tr>
            <Tr>
              <Td>2000</Td>
              <Td>Firefox 1 was released with JavaScript 1.5</Td>
            </Tr>
            <Tr>
              <Td>2008</Td>
              <Td>ECMAScript 4 was abandoned</Td>
            </Tr>
            <Tr>
              <Td>2009</Td>
              <Td>ECMAScript 5 was released</Td>
            </Tr>
            <Tr>
              <Td>2011</Td>
              <Td>IE 9 was the first browser to support ES5</Td>
            </Tr>
            <Tr>
              <Td>2011</Td>
              <Td>Firefox 4 was released with JavaScript 1.8.5</Td>
            </Tr>
            <Tr>
              <Td>2012</Td>
              <Td>Full support for ES5 in Safari 6</Td>
            </Tr>
            <Tr>
              <Td>2012</Td>
              <Td>Full support for ES5 in IE 10</Td>
            </Tr>
            <Tr>
              <Td>2012</Td>
              <Td>Full support for ES5 in Chrome 23</Td>
            </Tr>
            <Tr>
              <Td>2013</Td>
              <Td> Full support for ES5 in Firefox 21</Td>
            </Tr>
            <Tr>
              <Td>2013</Td>
              <Td>Full support for ES5 in Opera 15</Td>
            </Tr>
            <Tr>
              <Td>2014</Td>
              <Td>Full support for ES5 in all browsers</Td>
            </Tr>
            <Tr>
              <Td>2015</Td>
              <Td>ECMAScript 6 was released</Td>
            </Tr>
            <Tr>
              <Td>2016</Td>
              <Td>Full support for ES6 in Chrome 51</Td>
            </Tr>
            <Tr>
              <Td>2016</Td>
              <Td>Full support for ES6 in Opera 38</Td>
            </Tr>
            <Tr>
              <Td>2016</Td>
              <Td>Full support for ES6 in Edge 14</Td>
            </Tr>
            <Tr>
              <Td>2016</Td>
              <Td>Full support for ES6 in Safari 10</Td>
            </Tr>
            <Tr>
              <Td>2016</Td>
              <Td>Full support for ES6 in Firefox 52</Td>
            </Tr>
            <Tr>
              <Td>2018</Td>
              <Td>Full support for ES6 in all browsers except The Internet Explorer 11</Td>
            </Tr>
          </tbody>
        </table>
      </Section>
    </>
  )
}
const Section = styled.section`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const TitleMain = styled.h1`
  text-align: center;
  &::before {
    content: '';
    display: inline-block;
    background-size: 22px 22px;
    width: 22px;
    height: 22px;
    background-image: url('../../public/js.png');
  }
`

const TitleSecondary = styled.h2`
  text-align: center;
  &::before {
    content: '';
    display: inline-block;
    background-size: 22px 22px;
    width: 22px;
    height: 22px;
    background-image: url('../../public/history.png');
  }
`
const Paragraph = styled.p`
  padding: 10px 20px;
  max-width: 940px;
  line-height: 1.5;
`
const Hyperlink = styled.a`
  color: rgb(0, 0, 175);
  text-decoration: none;
  cursor: pointer;
`
const Th = styled.th`
  font-weight: bold;
  padding: 5px 10px;
`
const Td = styled.td`
  padding: 5px 10px;
`
const Tr = styled.tr`
  &:nth-of-type(2n) td {
    background-color: rgba(112, 128, 144, 0.122);
  }
`
