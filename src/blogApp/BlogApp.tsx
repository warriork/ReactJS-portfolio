import { ArticleDetail } from './ArticleDetail'
import { BlogArticles } from './BlogArticles'
import { BlogContext, BlogContextProvider } from './BlogAppContextProvider'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Helmet } from 'react-helmet'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import { NewArticle } from './newArticle'
import { articleDetailUrl, newArticleUrl, urls } from '../urls'
import { styles } from '../theme'
import React, { useState } from 'react'
import reactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const BlogApp = () => {
  return (
    <BlogContextProvider>
      <Helmet>
        <title>Blog app</title>
      </Helmet>
      <Div_Wrapper>
        <H1_Styled>Blog</H1_Styled>
        <Navbar_Styled>
          <Link_Router to={urls.blogApp}>Articles</Link_Router>
          <Link_Router to={newArticleUrl}>New Article</Link_Router>
        </Navbar_Styled>
        <Routes>
          <Route path={'/'} element={<BlogArticles />} />
          <Route path={urls.createArticle} element={<NewArticle />} />
          <Route path={articleDetailUrl} element={<ArticleDetail />} />
        </Routes>
      </Div_Wrapper>
    </BlogContextProvider>
  )
}

const H1_Styled = styled.h1`
  line-height: 50px;
`
const Navbar_Styled = styled.nav`
  display: flex;
  flex-direction: row;
`
const Link_Router = styled(NavLink)`
  display: block;
  width: 160px;
  text-decoration: none;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-size: 22px;
  padding: 0 20px;
  background: none;
  color: ${styles.color.black};
  transition: 0.5s ease-in-out;
  color: ${props => (props.className === 'active' ? styles.color.layoutActive : 'black')};
`
