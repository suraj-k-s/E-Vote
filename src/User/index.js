import React from 'react'
import { DarkModeContextProvider } from './context/darkModeContext'
import User from './App'

export default function index() {
  return (
    <DarkModeContextProvider>
            <User />
        </DarkModeContextProvider>
  )
}
