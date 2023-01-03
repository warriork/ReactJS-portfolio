import { createSlice } from '@reduxjs/toolkit'
import { generateID } from '../utils/helperFunctions'

type Article = {
  id: string | number
  date: string
  author: string
  title: string
  content: string
}

const blogSlice = createSlice({
  name: 'blog',
  initialState: { posts: [] as Article[] },
  reducers: {
    addArticleData(state, action) {
      state.posts.push({
        id: generateID(),
        date: new Date().toLocaleDateString(),
        title: action.payload.article.title,
        author: action.payload.article.author,
        content: action.payload.article.content,
      })
    },
    removeArticleData(state, action) {
      state.posts = state.posts.filter(article => article.id !== action.payload.id)
    },
  },
})
export const { addArticleData, removeArticleData } = blogSlice.actions
export default blogSlice.reducer
