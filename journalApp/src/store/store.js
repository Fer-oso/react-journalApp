import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authentication/slices/authSlice'
import { journalSlice } from './journal/journalSlice'
import { createNewNote, notesSlice } from './journal/notes/notesSlice'

export default configureStore({
  reducer: {
    authentication: authSlice.reducer,
    notes: notesSlice.reducer,
    journal: journalSlice.reducer
  },
  middleware:(getDefaultMiddleware) =>getDefaultMiddleware({
    serializableCheck: false
  })
})