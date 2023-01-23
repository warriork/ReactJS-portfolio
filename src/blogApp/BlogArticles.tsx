import { Link } from 'react-router-dom'
import { TextField, Typography } from '@mui/material'
import { getArticleUrl } from '../urls'
import { styles } from '../theme'
import { useAppSelector } from '../store/customHooks'
import React from 'react'
import styled from 'styled-components'
import type { Article } from '../store/blogSlice'

export const BlogArticles = () => {
  const articles = useAppSelector(state => state.blog.posts)
  if (articles.length === 0) {
    return (
      <>
        <Typography variant='h5'>There are no articles yet</Typography>
        <Typography variant='body1'>
          Simply click on the NEW ARTICLE button and create your first artilce
        </Typography>
      </>
    )
  }
  return (
    <Div_Container>
      {articles.map((article: Article) => (
        <Link_Styled to={getArticleUrl(article.title)} key={article.id}>
          <Div_ArticleContainer>
            <Typography variant='h5'>{article.title}</Typography>
            <Typography variant='body2'>
              by {article.author} {article.date}
            </Typography>
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
    transform: translateY(-2px);
  }
`
const Div_ArticleContainer = styled.div``
const Div_Container = styled.div``
