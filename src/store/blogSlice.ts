import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { generateID } from '../utils/helperFunctions'

type Article = {
  id: string | number
  date: string
  author: string
  title: string
  content: string
}
type BlogState = {
  posts: Article[]
}
const initialState: BlogState = {
  posts: [],
}
const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addArticleData(
      state,
      action: PayloadAction<{ title: string; author: string; content: string }>
    ) {
      state.posts.push({
        id: generateID(),
        date: new Date().toLocaleDateString(),
        title: action.payload.title,
        author: action.payload.author,
        content: action.payload.content,
      })
    },
    removeArticleData(state, action: PayloadAction<string>) {
      state.posts = state.posts.filter(article => article.id !== action.payload)
    },
  },
})
export const { addArticleData, removeArticleData } = blogSlice.actions
export default blogSlice.reducer
