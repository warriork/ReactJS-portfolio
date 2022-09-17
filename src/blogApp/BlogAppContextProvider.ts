import { genericHookContextBuilder } from '../utils/createCustomContextHook'
import { useState } from 'react'

export const useLogicState = () => {
  return { a: '1' }
}
export const { ContextProvider: BlogContextProvider, Context: BlogContext } =
  genericHookContextBuilder(useLogicState)
