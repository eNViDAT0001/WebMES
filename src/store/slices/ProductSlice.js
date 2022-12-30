
import { createSlice } from "@reduxjs/toolkit";
import { ProductApi } from "../../api/ProductApi";
const initialState= {
    ProductDetail:{},
    ProductReview:[],
    Banners:[],
    Category:[],
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
        },
        setCategory: (state,action) =>{
            state.Category = action.payload
        }
    }
})



export const FetchAllProductBanner = () => async (dispatch) => {
    try {
        const response = await ProductApi.GetBanners()
        dispatch(setProductBanner(response.data.data))
    } catch (error) {
        console.log(error)
    }
} 
export const FetchAllCategory = () => async (dispatch) => {
    try {
        const response = await ProductApi.GetCategories()
        dispatch(setCategory(response.data.data))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProductDetail,
    setProductPreview,
    setProductBanner,
    setCategory,
} = productSlice.actions
export default productSlice.reducer