
import { createSlice } from "@reduxjs/toolkit";
import { ProductApi } from "../../api/ProductApi";
import { transformFilters } from "../../stogare_function/listActions";
const initialState= {
    ProductDetail:{},
    ProductPreview:[],
    Banners:[],
    CategoryTree:[],
    CategoryRoof:[],
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
            state.ProductPreview = action.payload
        },
        setProductBanner: (state,action) =>{
            state.ProductBanner = action.payload
        },
        setCategoryTree: (state,action) =>{
            state.CategoryTree = action.payload
        },
        setCategoryRoof: (state,action) =>{
            state.CategoryRoof = action.payload
        },
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
export const FetchAllCategoryRoof = () => async (dispatch) => {
    try {
        const response = await ProductApi.GetCategoriesRoof()
        dispatch(setCategoryRoof(response.data.data))
    } catch (error) {
        console.log(error)
    }
}
export const FetchAllCategoryTree = () => async (dispatch) => {
    try {
        const response = await ProductApi.GetCategoriesTree()
        dispatch(setCategoryTree(response.data.data))
    } catch (error) {
        console.log(error)
    }
}
export const FetchProductInHomePage = () => async (dispatch) => {
    try {
        const filter={
            "sorts[]":"id_DESC",
            "limit" : 20,
        }
        const response = await ProductApi.GetProductPreview(transformFilters(filter))
        dispatch(setProductPreview(response.data.data))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProductDetail,
    setProductPreview,
    setProductBanner,
    setCategoryTree,
    setCategoryRoof,
} = productSlice.actions
export default productSlice.reducer