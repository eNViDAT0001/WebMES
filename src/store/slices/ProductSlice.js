
import { createSlice } from "@reduxjs/toolkit";
import { ProductApi } from "../../api/ProductApi";
import { transformFilters } from "../../stogare_function/listActions";
const initialState= {
    ProductDetail:{},
    Specification:[],
    Description:{},
    Media:{},
    ProductPreviewInHomePage:{},
    ProductPreviewInCategory:{},
    Banners:{},
    CategoryTree:[],
    CategoryRoof:{},
    CategoryHandle:{},
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
        setCategoryHandle:(state,action)=>{
            state.CategoryHandle = action.payload
        },
        setProductPreviewInHomePage: (state,action) =>{
            state.ProductPreviewInHomePage = action.payload
        },
        setProductPreviewInCategory: (state,action) =>{
            state.ProductPreviewInCategory = action.payload
        },
        setBanners: (state,action) =>{
            state.Banners = action.payload
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
export const FetchProductFromSelectCategory = (id) => async(dispatch) =>{
    try {
        const response = await ProductApi.GetProductFromCategorySelected(id)
        dispatch(setProductPreviewInCategory(response))
    } catch (error) {
        console.log(error)
    }
}

export const FetchAllProductBanner = () => async (dispatch) => {
    try {
        const response = await ProductApi.GetBanners()
        dispatch(setBanners(response))
    } catch (error) {
        console.log(error)
    }
} 
export const FetchAllCategoryRoof = () => async (dispatch) => {
    try {
        const response = await ProductApi.GetCategoriesRoof()
        dispatch(setCategoryRoof(response))
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
        dispatch(setDescription(response))
    }catch(err){
        console.log(err)
    }
}

export const FetchDetailProduct=(id)=>async(dispatch)=>{
    try {
        const response = await ProductApi.GetDetailProduct(id)
        dispatch(setProductDetail(response))
    } catch (error) {
        console.log(error)
    }
}

export const FetchMediaFromOneProduct = (id) => async(dispatch) =>{
    try{
        const response = await ProductApi.GetMedia(id)
        dispatch(setMedia(response))
    }catch(err){
        console.log(err)
    }
}

export const FetchSpecificationFromOneProduct = (id) => async(dispatch) =>{
    try{
        const response = await ProductApi.GetSpecification(id)
        if (response.data.data) {
            dispatch(setSpecification(response.data.data))
        }
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
        dispatch(setProductPreviewInHomePage(response))
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
        dispatch(setProductPreviewInCategory(response))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProductDetail,
    setCategoryHandle,
    setProductPreviewInHomePage,
    setProductPreviewInCategory,
    setBanners,
    setCategoryTree,
    setCategoryRoof,
    setDescription,
    setMedia,
    setSpecification,
    resetProduct,
} = productSlice.actions
export default productSlice.reducer