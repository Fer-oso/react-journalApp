import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './authentication/slices/authSlice'

export default configureStore({
  reducer: {
    authentication: authSlice.reducer
  },
})