//https://api.publicapis.org/entries

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const ListId = [
    {
        id: 0,
    },
    {
        id: 1,
    },
    {
        id: 2,
    },
    {
        id: 3,
    },
    {
        id: 4,
    }
]
const initialState= {
    loading: false,
    product:undefined,
    error: '',
}
/*
export const fetchTestApi = createAsyncThunk('api/fetchAPI',() =>{
    return axios
    .get('https://api.publicapis.org/entries')
    .then((response) =>response.data)
})
*/

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

export const fetchOneProductFromId = (id) => async (dispatch) => {
    try {
        const response = await ListId[id].id
        dispatch(setProduct(response))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProduct,
} = productSlice.actions
export default productSlice.reducer