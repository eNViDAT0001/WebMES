import { configureStore } from '@reduxjs/toolkit'
import { routerSlice } from './slices/RouterSlice'
export const store = configureStore({
  reducer: {
    router: routerSlice.reducer
  },
})