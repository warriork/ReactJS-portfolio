import { useState } from 'react'
import React from 'react'

export const generateID = () => {
  return Math.floor(Math.random() * 100_000)
}

export const useLocalStorage = <Type>(key: string, initialValue: Type) => {
  const [storedValue, setStoredValue] = useState<Type>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch {
      console.error
      return initialValue
    }
  })

  const setValue = (value: Type) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch {
      console.error
    }
  }
  return [storedValue, setValue] as const
}
