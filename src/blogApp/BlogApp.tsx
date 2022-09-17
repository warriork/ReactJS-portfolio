import { ArticleDetail } from './ArticleDetail'
import { BlogArticles } from './BlogArticles'
import { BlogContext, BlogContextProvider } from './BlogAppContextProvider'
import { Div_Wrapper } from '../components/Div_Wrapper'
import { Helmet } from 'react-helmet'
import { NavLink, Route, Routes } from 'react-router-dom'
import { styles } from '../theme'
import { urls } from '../urls'
import React from 'react'
import reactMarkdown from 'react-markdown'
import styled from 'styled-components'

export const BlogApp = () => {
  return (
    <Div_Wrapper>
      <Helmet>
        <title>Blog app</title>
      </Helmet>
      <h1>Blog</h1>
      <Navbar_Styled>
        <Link_Router to={urls.createArticle}>New Article</Link_Router>
        <Link_Router to={urls.blogApp}>Articles</Link_Router>
      </Navbar_Styled>
      <BlogContextProvider>
        <Routes>
          <Route path={urls.blogApp} element={<BlogArticles />} />
          <Route path={urls.createArticle} element={<div />} />
          {/* <Route path={articleUrl} element={<ArticleDetail />} /> */}
        </Routes>
        <BlogArticles />
      </BlogContextProvider>
    </Div_Wrapper>
  )
}

const Navbar_Styled = styled.nav``
const Link_Router = styled(NavLink)`
  /* display: flex;
  align-items: center;
  justify-content: center;
  color: ;
  text-decoration: none;
  cursor: pointer;
  height: 40px;
  padding: 0 20px;
  background: none;
  transition: 0.5s ease-in-out;*/
  background: ${props => (props.className === 'active' ? styles.color.layoutActive : 'none')};
  /*  &:hover {
    background: ; 
  }*/
`
