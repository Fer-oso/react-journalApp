import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'authentication',
  initialState: {
    status: 'not-authenticated',
    id: null,
    email: null,
    displayName: null,
    photoURL: null,
    error: null
  },
  reducers: {
   login: (state,action) =>{
    state.status = 'authenticated';
    state.id = action.payload.uid;
    state.email = action.payload.email;
    state.displayName =action.payload.displayName;
    state.photoURL = action.payload.photoURL;
    state.error = null
   },

   logout:(state,action) => {
        state.status = 'not-authenticated';
        state.id = null;
        state.email = null;
        state.displayName = null;
        state.photoURL = null;
        state.error = action.payload
   },

   checkingCredentials:(state)=>{
    state.status = 'checking'
   }
}
})

// Action creators are generated for each case reducer function
export const { login, logout,checkingCredentials } = authSlice.actions
