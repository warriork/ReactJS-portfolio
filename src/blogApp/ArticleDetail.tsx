import { BlogContext } from './BlogAppContextProvider'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Error_404 } from '../components/Error_404'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { slugify } from '../utils/slugify'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticleDetail = () => {
  const { slug } = useParams()
  const logic = useContext(BlogContext)

  const article = logic.articles.find(article => slugify(article.title) === slug)

  return article ? (
    <div>
      <h2>{article.title}</h2>
      <ReactMarkdown>{article.content}</ReactMarkdown>
      <p>
        by <Autor_Span>{article.author}</Autor_Span>, <Date_Span>{article.date}</Date_Span>
      </p>
    </div>
  ) : (
    <Error_404 />
  )
}
const Autor_Span = styled.span``
const Date_Span = styled.span``
