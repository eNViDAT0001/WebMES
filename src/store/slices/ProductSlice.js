//https://api.publicapis.org/entries

import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    ProductDetail:[],
    ProductReview:[],
    ProductBanner:[],
}


const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:
    {
        setProductDetail: (state,action) =>{
            state.ProductDetail = action.payload
        },
        setProductPreview: (state,action) =>{
            state.ProductReview = action.payload
        },
        setProductBanner: (state,action) =>{
            state.ProductBanner = action.payload
        }
    }
})



export const fetchAllProduct = (filters) => async (dispatch) => {
    try {
        const response ={} //await ProductApi.ReadFullProduct(filters)
        dispatch(setProductDetail(response))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProductDetail,
    setProductPreview,
    setProductBanner,
} = productSlice.actions
export default productSlice.reducer