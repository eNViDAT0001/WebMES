import { createSlice } from '@reduxjs/toolkit'
import { CATEGORY_DUMMY_DATABASE } from '../../dummy_database/CategoryDummyDatabase'



const initialState = {
    branch: [],
    product: [],
}
const CategorySlice = createSlice({
    name:"category",
    initialState,
    reducers:{
        setBranch : (state,action) =>
        {
            state.branch = action.payload
        },
        setProduct: (state,action)  =>{
            state.product = action.payload
        },
    }
})

export const fetchAllBranch = () => async (dispatch) => {
    try {
        const response = await CATEGORY_DUMMY_DATABASE.branch
        dispatch(setBranch(response))
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllProduct = () => async (dispatch) => {
    try {
        const response = await CATEGORY_DUMMY_DATABASE.product
        dispatch(setProduct(response))
    } catch (error) {
        console.log(error)
    }
}

export const {
    setBranch,
    setProduct,
} = CategorySlice.actions
export default CategorySlice.reducer

