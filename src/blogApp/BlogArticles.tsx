import { BlogContext } from './BlogAppContextProvider'
import { Link } from 'react-router-dom'
import { getArticleUrl } from '../urls'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const BlogArticles = () => {
  const logic = useContext(BlogContext)
  if (logic.articles.length === 0) {
    return <h2>Start by creating a new article</h2>
  }
  return (
    <Div_Container>
      {logic.articles.map(article => (
        <Link to={getArticleUrl(article.title)} key={article.id}>
          <Div_ArticleContainer>
            <h2>{article.title}</h2>
            <p>
              by {article.author} {article.date}
            </p>
          </Div_ArticleContainer>
        </Link>
      ))}
    </Div_Container>
  )
}

const Div_ArticleContainer = styled.div``
const Div_Container = styled.div``
