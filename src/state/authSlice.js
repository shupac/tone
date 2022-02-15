import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  userToken: null,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    tokenRestored(state, action) {
      return {
        ...state,
        userToken: action.payload.token,
        user: action.payload.user,
        isLoading: false,
      }
    },
    signedIn(state, action) {
      return {
        ...state,
        userToken: action.payload.token,
        user: action.payload.user,
      }
    },
    signedOut(state, action) {
      return {
        ...state,
        userToken: null,
        user: null,
      }
    },
  },
})

export const { tokenRestored, signedIn, signedOut } = authSlice.actions

export default authSlice.reducer
