import { BlogContext } from './BlogAppContextProvider'
import { DeleteBtn } from '../components/buttons/deleteBtn'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Error_404 } from '../components/Error_404'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { slugify } from '../utils/slugify'
import { styles } from '../theme'
import { urls } from '../urls'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticleDetail = () => {
  const { slug } = useParams()
  const logic = useContext(BlogContext)
  const navigateTo = useNavigate()
  const article = logic.articles.find(article => slugify(article.title) === slug)

  return article ? (
    <div>
      <Flex_wrapper>
        <h2>{article.title}</h2>
        <DeleteBtn
          onClick={() => {
            logic.removeArticleData(article.id)
            navigateTo(`${urls.blogApp}`)
          }}
        />
      </Flex_wrapper>
      <ReactMarkdown>{article.content}</ReactMarkdown>
      <p>
        by <Autor_Span>{article.author}</Autor_Span>, <Date_Span>{article.date}</Date_Span>
      </p>
    </div>
  ) : (
    <Error_404 />
  )
}
const Flex_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: bottom;
`

const Autor_Span = styled.span``
const Date_Span = styled.span``
