
import { createSlice } from "@reduxjs/toolkit";
import { ProductApi } from "../../api/ProductApi";
import { transformFilters } from "../../stogare_function/listActions";
const initialState= {
    ProductDetail:{},
    Specification:[],
    Description:[],
    Media:[],
    ProductPreviewInHomePage:[],
    ProductPreviewInCategory:[],
    Banners:[],
    CategoryTree:[],
    CategoryRoof:[],
}


const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:
    {
        resetProduct:()=>initialState,
        setProductDetail: (state,action) =>{
            state.ProductDetail = action.payload
        },
        setProductPreviewInHomePage: (state,action) =>{
            state.ProductPreviewInHomePage = action.payload
        },
        setProductPreviewInCategory: (state,action) =>{
            state.ProductPreviewInCategory = action.payload
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
        setDescription:(state,action)=>{
            state.Description = action.payload
        },
        setSpecification: (state,action)=>{
            state.Specification = action.payload
        },
        setMedia: (state,action)=>{
            state.Media = action.payload
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

export const FetchDescriptionFromOneProduct = (id) => async(dispatch) =>{
    try{
        const response = await ProductApi.GetDescriptionFromProduct(id)
        dispatch(setDescription(response.data.data))
    }catch(err){
        console.log(err)
    }
}

export const FetchDetailProduct=(id)=>async(dispatch)=>{
    try {
        const response = await ProductApi.GetDetailProduct(id)
        dispatch(setProductDetail(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export const FetchMediaFromOneProduct = (id) => async(dispatch) =>{
    try{
        const response = await ProductApi.GetMedia(id)
        dispatch(setMedia(response.data.data))
    }catch(err){
        console.log(err)
    }
}

export const FetchSpecificationFromOneProduct = (id) => async(dispatch) =>{
    try{
        const response = await ProductApi.GetSpecification(id)
        dispatch(setSpecification(response.data.data))
    }catch(err){
        console.log(err)
    }
}
export const FetchProductInHomePage = () => async (dispatch) => {
    try {
        const filter={
            "sorts[]":"id_DESC",
            "limit" : 20,
        }
        const response = await ProductApi.GetProductPreview(transformFilters(filter))
        dispatch(setProductPreviewInHomePage(response.data.data))
    } catch (error) {
        console.log(error)
    }
} 

export const FetchProductInCategory = () => async (dispatch) => {
    try {
        const filter={
            "sorts[]":"id_DESC",
            "limit" : 20,
        }
        const response = await ProductApi.GetProductPreview(transformFilters(filter))
        dispatch(setProductPreviewInCategory(response.data.data))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProductDetail,
    setProductPreviewInHomePage,
    setProductPreviewInCategory,
    setProductBanner,
    setCategoryTree,
    setCategoryRoof,
    setDescription,
    setMedia,
    setSpecification,
    resetProduct,
} = productSlice.actions
export default productSlice.reducer