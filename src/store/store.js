import { configureStore } from '@reduxjs/toolkit'
import TestApiReducer from './slices/TestApiSlice'
import CategoryReducer from './slices/CategorySlice'
import ProductReducer from './slices/ProductSlice'
import OrderReducer from './slices/OrderSlice'
import AddressReducer from './slices/AddressSlice'
import AuthReducer from './slices/AuthSlice'
export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  reducer: {
    auth: AuthReducer,
    test: TestApiReducer,
    category: CategoryReducer,
    product: ProductReducer,
    order: OrderReducer,
    address: AddressReducer,
  },
})