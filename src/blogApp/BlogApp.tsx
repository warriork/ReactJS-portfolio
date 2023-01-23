import { ArticleDetail } from './ArticleDetail'
import { BlogArticles } from './BlogArticles'
import { Button } from '@mui/material'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Helmet } from 'react-helmet'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { NewArticle } from './newArticle'
import { Typography } from '@mui/material'
import { articleDetailUrl, newArticleUrl, urls } from '../urls'
import { styles } from '../theme'
import React, { useState } from 'react'
import reactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const BlogApp = () => {
  return (
    <>
      <Helmet>
        <title>Blog app</title>
      </Helmet>
      <Div_Wrapper>
        <Typography component='h1' variant='h4' sx={{ lineHeight: '4rem' }}>
          Blog
        </Typography>
        <Navbar_Styled>
          <Link_Router to={urls.blogApp}>
            <Button variant='contained' sx={{ width: '200px', marginBottom: '10px' }}>
              Articles
            </Button>
          </Link_Router>
          <Link_Router to={newArticleUrl}>
            <Button variant='outlined' sx={{ width: '200px', marginBottom: '10px' }}>
              New Article
            </Button>
          </Link_Router>
        </Navbar_Styled>
        <Routes>
          <Route path={'/'} element={<BlogArticles />} />
          <Route path={urls.createArticle} element={<NewArticle />} />
          <Route path={articleDetailUrl} element={<ArticleDetail />} />
        </Routes>
      </Div_Wrapper>
    </>
  )
}

const H1_Styled = styled.h1`
  line-height: 50px;
`
const Navbar_Styled = styled.nav`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    width: 100vw;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`
const Link_Router = styled(NavLink)`
  text-decoration: none;
`
