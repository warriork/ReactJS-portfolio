import { BlogContext } from './BlogAppContextProvider'
import { Helmet } from 'react-helmet'
import { slugify } from '../utils/slugify'
import { urls } from '../urls'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState } from 'react'
import styled from 'styled-components'

export const NewArticle = () => {
  const [title, setTitle] = useState('')
  const [titleErr, setTitleErr] = useState(
    '' as '' | 'Please enter a title' | 'Title must be unique'
  )
  const [author, setAuthor] = useState('')
  const [authorErr, setAuthorErr] = useState('' as '' | 'Please enter an author')
  const [content, setContent] = useState('')
  const [contentErr, setContentErr] = useState('' as '' | 'Start writing an article')
  // const [isValidInput, setIsValidInput] = useState(false)
  const logic = useContext(BlogContext)
  const navigateTo = useNavigate()

  const validateForm = () => {
    let isValidInput = true
    setContentErr('')
    setAuthorErr('')
    setTitleErr('')
    if (!title?.trim()) {
      isValidInput = false
      setTitleErr('Please enter a title')
    } else if (logic.articles.some(article => slugify(article.title) === slugify(title))) {
      isValidInput = false
      setTitleErr('Title must be unique')
    }
    if (!author?.trim()) {
      isValidInput = false
      setAuthorErr('Please enter an author')
    }
    if (!content?.trim()) {
      isValidInput = false
      setContentErr('Start writing an article')
    }
    return isValidInput
  }

  return (
    <>
      <Helmet>
        <title>New Article</title>
      </Helmet>
      <Div_Wrapper>
        <H2_Styled>Create a new article</H2_Styled>
        <CreateArticle
          onSubmit={e => {
            e.preventDefault()
            validateForm()
            if (validateForm()) {
              logic.addArticleData({ author, title, content })
              navigateTo(`${urls.blogApp}`)
              setAuthor('')
              setTitle('')
              setContent('')
            }
          }}
        >
          <label htmlFor='autor'>Author</label>
          <input type='text' id='author' value={author} onChange={e => setAuthor(e.target.value)} />
          <ValidationError_Div>{authorErr}</ValidationError_Div>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} />
          <ValidationError_Div>{titleErr}</ValidationError_Div>
          <label htmlFor='content'>Content</label>
          {/* <input
            type='text'
            id='content'
            value={content}
            onChange={e => setContent(e.target.value)}
          /> */}
          <textarea
            name='content'
            id='content'
            cols={30}
            rows={10}
            onChange={e => setContent(e.target.value)}
          >
            {content}
          </textarea>
          <ValidationError_Div>{contentErr}</ValidationError_Div>
          <Submit_Btn type='submit'>Create article</Submit_Btn>
        </CreateArticle>
      </Div_Wrapper>
    </>
  )
}

const Div_Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const H2_Styled = styled.h2`
  line-height: 35px;
`
const CreateArticle = styled.form`
  display: flex;
  flex-direction: column;
`
const Submit_Btn = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background: none;
  border-radius: 10px;
  cursor: pointer;
`
const ValidationError_Div = styled.div`
  color: red;
  line-height: 30px;
`
