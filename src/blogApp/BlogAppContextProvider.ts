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
  const removeArticleData = (DeletedArticleId: string | number) => {
    const newArticlesList = articles.filter(article => article.id !== DeletedArticleId)
    setArticles(newArticlesList)
  }

  return {
    articles,
    setArticles,
    addArticleData,
    removeArticleData,
  }
}

export const { ContextProvider: BlogContextProvider, Context: BlogContext } =
  genericHookContextBuilder(useLogicState)
