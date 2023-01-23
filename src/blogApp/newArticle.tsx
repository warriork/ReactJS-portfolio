import { Button, FormControl, FormHelperText, TextField, Typography } from '@mui/material'
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
    '' as '' | '*Please enter a title' | '*Title must be unique'
  )
  const [author, setAuthor] = useState('')
  const [authorErr, setAuthorErr] = useState('' as '' | '*Please enter an author')
  const [content, setContent] = useState('')
  const [contentErr, setContentErr] = useState('' as '' | '*Start writing an article')

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
      setTitleErr('*Please enter a title')
    } else if (articles.some((article: Article) => slugify(article.title) === slugify(title))) {
      isValidInput = false
      setTitleErr('*Title must be unique')
    }
    if (!author?.trim()) {
      isValidInput = false
      setAuthorErr('*Please enter an author')
    }
    if (!content?.trim()) {
      isValidInput = false
      setContentErr('*Start writing an article')
    }
    return isValidInput
  }

  return (
    <>
      <Helmet>
        <title>New Article</title>
      </Helmet>
      <Div_Wrapper>
        <Typography variant='h5' sx={{ marginBottom: '10px' }}>
          Create a new article
        </Typography>
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
          <FormControl>
            <TextField
              fullWidth
              margin='normal'
              label='Author'
              id='author'
              value={author}
              onChange={e => setAuthor(e.target.value)}
            />
            <FormHelperText error>{authorErr}</FormHelperText>
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              margin='normal'
              label='Title'
              id='title'
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <FormHelperText error>{titleErr}</FormHelperText>
          </FormControl>
          <FormControl>
            <TextField
              fullWidth
              margin='normal'
              multiline
              rows={5}
              label='Content, markdown friendly'
              name='content'
              id='content'
              onChange={e => setContent(e.target.value)}
            >
              {content}
            </TextField>
            <FormHelperText error>{authorErr}</FormHelperText>
          </FormControl>

          <Button variant='contained' type='submit'>
            Create article
          </Button>
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
const CreateArticle = styled.form`
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  width: 700px;
  @media screen and (max-width: 700px) {
    width: 100vw;
  } ;
`
