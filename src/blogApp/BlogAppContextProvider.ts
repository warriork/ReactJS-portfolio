import { generateID, useLocalStorage } from '../utils/helperFunctions'
import { genericHookContextBuilder } from '../utils/createCustomContextHook'
import { useState } from 'react'

const getCurrentDate = () => new Date()
type Article = {
  id: string | number
  date: string
  author: string
  title: string
  content: string
}
const useLogicState = () => {
  const [articles, setArticles] = useLocalStorage('Articles', [] as Article[])

  const addArticleData = (article: { title: string; author: string; content: string }) => {
    setArticles([
      {
        id: generateID(),
        date: getCurrentDate().toLocaleDateString(),
        title: article.title,
        author: article.title,
        content: article.content,
      },
      ...articles,
    ])
  }

  return {
    articles,
    setArticles,
    addArticleData,
  }
}

export const { ContextProvider: BlogContextProvider, Context: BlogContext } =
  genericHookContextBuilder(useLogicState)
