import { configureStore } from '@reduxjs/toolkit'
import userReduder from './user/userSlice.js';

export const store = configureStore({
  reducer: {user: userReduder},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware ({
    serializableCheck: false,
  })
})