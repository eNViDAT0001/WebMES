import { configureStore } from '@reduxjs/toolkit'
import TestApiReducer from './slices/TestApiSlice'
import CategoryReducer from './slices/CategorySlice'
import ProductReducer from './slices/ProductSlice'
export const store = configureStore({
  reducer: {
    test: TestApiReducer,
    category: CategoryReducer,
    product: ProductReducer,
  },
})