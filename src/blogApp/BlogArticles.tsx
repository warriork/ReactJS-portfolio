import { Link } from 'react-router-dom'
import { getArticleUrl } from '../urls'
import { styles } from '../theme'
import { useSelector } from 'react-redux'
import React from 'react'
import styled from 'styled-components'

type Article = {
  id: string | number
  date: string
  author: string
  title: string
  content: string
}

export const BlogArticles = () => {
  const articles = useSelector((state: any) => state.blog.posts)
  if (articles.length === 0) {
    return <h2>Start by creating a new article</h2>
  }
  return (
    <Div_Container>
      {articles.map((article: Article) => (
        <Link_Styled to={getArticleUrl(article.title)} key={article.id}>
          <Div_ArticleContainer>
            <h2>{article.title}</h2>
            <p>
              by {article.author} {article.date}
            </p>
          </Div_ArticleContainer>
        </Link_Styled>
      ))}
    </Div_Container>
  )
}
const Link_Styled = styled(Link)`
  transition: 0.2s;
  display: block;
  color: ${styles.color.black};
  text-decoration: none;
  &:hover {
    transform: translateY(-5px);
  }
`
const Div_ArticleContainer = styled.div``
const Div_Container = styled.div``
