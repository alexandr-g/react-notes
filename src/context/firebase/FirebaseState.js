import React, { useReducer } from 'react'
import { FirebaseContext } from './firebaseContext'

export const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    loading: false
  }

  const [state, dispatch] = useReducer(FirebaseState, initialState)

  return (
    <FirebaseContext.Provider value={{}}>{children}</FirebaseContext.Provider>
  )
}
