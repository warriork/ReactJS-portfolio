import { Helmet } from 'react-helmet'
import { addArticleData } from '../store/blogSlice'
import { slugify } from '../utils/slugify'
import { styles } from '../theme'
import { urls } from '../urls'
import { useAppDispatch, useAppSelector } from '../store/customHooks'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'
import styled from 'styled-components'
import type { Article } from '../store/blogSlice'

export const NewArticle = () => {
  const [title, setTitle] = useState('')
  const [titleErr, setTitleErr] = useState(
    '' as '' | 'Please enter a title' | 'Title must be unique'
  )
  const [author, setAuthor] = useState('')
  const [authorErr, setAuthorErr] = useState('' as '' | 'Please enter an author')
  const [content, setContent] = useState('')
  const [contentErr, setContentErr] = useState('' as '' | 'Start writing an article')

  const navigateTo = useNavigate()
  const dispatch = useAppDispatch()
  const articles = useAppSelector(store => store.blog.posts)
  const validateForm = () => {
    let isValidInput = true
    setContentErr('')
    setAuthorErr('')
    setTitleErr('')
    if (!title?.trim()) {
      isValidInput = false
      setTitleErr('Please enter a title')
    } else if (articles.some((article: Article) => slugify(article.title) === slugify(title))) {
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
              dispatch(addArticleData({ author, title, content }))
              navigateTo(`${urls.blogApp}`)
              setAuthor('')
              setTitle('')
              setContent('')
            }
          }}
        >
          <Label_Styled htmlFor='autor'>Author</Label_Styled>
          <Input_Styled
            type='text'
            id='author'
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
          <ValidationError_Div>{authorErr}</ValidationError_Div>
          <Label_Styled htmlFor='title'>Title</Label_Styled>
          <Input_Styled
            type='text'
            id='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <ValidationError_Div>{titleErr}</ValidationError_Div>
          <Label_Styled htmlFor='content'>Content</Label_Styled>
          <Textarea_Styled
            name='content'
            id='content'
            cols={30}
            rows={10}
            onChange={e => setContent(e.target.value)}
          >
            {content}
          </Textarea_Styled>
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
  margin-top: 20px;
  padding: 10px 20px;
  background: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 900;
  transition: 0.3s;
  &:hover {
    background: ${styles.color.layout};
    color: white;
    transform: translateY(-3px);
  }
`
const ValidationError_Div = styled.div`
  color: red;
  line-height: 30px;
`
const Label_Styled = styled.label`
  text-align: center;
  font-size: 20px;
  line-height: 3rem;
`
const Input_Styled = styled.input`
  height: 30px;
  padding: 0 5px;
  font-size: 17px;
`
const Textarea_Styled = styled.textarea`
  font-size: 17px;
  padding: 5px;
`
