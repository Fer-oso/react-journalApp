import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authentication/slices/authSlice'
import { journalSlice } from './journal/journalSlice'

export default configureStore({
  reducer: {
    authentication: authSlice.reducer,
    journal: journalSlice.reducer
  },
})