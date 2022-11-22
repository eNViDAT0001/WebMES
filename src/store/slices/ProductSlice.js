//https://api.publicapis.org/entries

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { ProductApi } from "../../api/productApi";
const initialState= {
    loading: false,
    product:{},
    error: '',
}


const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:
    {
        setProduct: (state,action) =>{
            state.product = action.payload
        }
    }
})

export const fetchOneProduct = (id) => async (dispatch) => {
    try {
        const response = await ProductApi.ReadOneProduct(id)
        dispatch(setProduct(response))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProduct,
} = productSlice.actions
export default productSlice.reducer