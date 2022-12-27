import { configureStore } from '@reduxjs/toolkit'
import TestApiReducer from './slices/TestApiSlice'
import CategoryReducer from './slices/CategorySlice'
import ProductReducer from './slices/ProductSlice'
import OrderReducer from './slices/OrderSlice'
import AddressReducer from './slices/AddressSlice'
import AdminReducer from './slices/AdminSlice'
import CommentReducer from './slices/CommentSlice'
export const store = configureStore({
  reducer: {
    test: TestApiReducer,
    category: CategoryReducer,
    product: ProductReducer,
    order: OrderReducer,
    address: AddressReducer,
    admin: AdminReducer,
    comment: CommentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),

})