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
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  font-size: 22px;
  padding: 0 20px;
  background: none;
  transition: 0.5s ease-in-out;
  text-decoration: ${props => (props.className === 'active' ? 'underline' : 'none')};
`
// const Button = styled.button`
//   padding: 2px 5px;
//   background: none;
//   border: none;
//   cursor: pointer;
//   border-radius: 10px;
//   transition: 0.3s;
//   &:nth-child(${props =>
//         props.className === 'active' ? '1' : props.filter === 'active' ? '2' : '3'}) {
//     font-weight: 900;
//     color: ${styles.color.layout};
//     border: 2px solid ${styles.color.layout};
//   }
// `
