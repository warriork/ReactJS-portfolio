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
    <Div_Wrapper>
      <BlogContextProvider>
        <Helmet>
          <title>Blog app</title>
        </Helmet>
        <h1>Blog</h1>
        <Navbar_Styled>
          <Link_Router to={urls.blogApp}>Articles</Link_Router>
          <Link_Router to={newArticleUrl}>New Article</Link_Router>
        </Navbar_Styled>
        <Routes>
          <Route path={'/'} element={<BlogArticles />} />
          <Route path={urls.createArticle} element={<NewArticle />} />
          <Route path={articleDetailUrl} element={<ArticleDetail />} />
        </Routes>
      </BlogContextProvider>
    </Div_Wrapper>
  )
}

const Navbar_Styled = styled.nav`
  display: flex;
  flex-direction: row;
`
const Link_Router = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  height: 40px;
  padding: 0 20px;
  background: none;
  color: ${styles.color.black};
  transition: 0.5s ease-in-out;
  background-color: ${props => (props.className === 'active' ? styles.color.layoutActive : 'none')};
`
