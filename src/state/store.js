import thunkMiddleware from 'redux-thunk'

import authReducer from 'state/authSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [thunkMiddleware],
})
