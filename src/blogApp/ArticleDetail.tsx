import { DeleteBtn } from '../components/buttons/deleteBtn'
import DeleteIcon from '@mui/icons-material/Delete'

import { Div_Wrapper } from '../components/Div_Wrapper'
import { Error_404 } from '../components/Error_404'
import { IconButton, Typography } from '@mui/material'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { removeArticleData } from '../store/blogSlice'
import { slugify } from '../utils/slugify'
import { styles } from '../theme'
import { urls } from '../urls'
import { useAppDispatch, useAppSelector } from '../store/customHooks'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import styled from 'styled-components'

export const ArticleDetail = () => {
  const { slug } = useParams()
  const articles = useAppSelector(state => state.blog.posts)
  const navigateTo = useNavigate()
  const dispatch = useAppDispatch()
  const article = articles.find((article: any) => slugify(article.title) === slug)

  return article ? (
    <div>
      <Flex_wrapper>
        <h2>{article.title}</h2>
        <IconButton
          onClick={() => {
            dispatch(removeArticleData(article.id))
            navigateTo(`${urls.blogApp}`)
          }}
        >
          <DeleteIcon />
        </IconButton>
      </Flex_wrapper>
      <ReactMarkdown>{article.content}</ReactMarkdown>
      <Typography variant='body2' sx={{ marginTop: '5px' }}>
        by <b>{article.author}</b>, created: <b>{article.date}</b>
      </Typography>
    </div>
  ) : (
    <Error_404 />
  )
}
const Flex_wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: bottom;
`
