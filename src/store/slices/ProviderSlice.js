import { createSlice } from '@reduxjs/toolkit'
import { ProviderApi } from '../../api/ProviderApi'

const initialState = {
    ListBrand:[],
}

const ProviderSlice = createSlice({
    name:'provider',
    initialState,

    reducers:
    {
        setListBrand: (state,action) =>{
            state.ListBrand = action.payload
        },

    },
})

export const FetchGetListBrand = (id,filter) => async(dispatch) =>{
    try{
        const response = await ProviderApi.GetListBrand(id,filter)
        dispatch(setListBrand(response.data.data))
    }catch(err){
        console.log(err)
    }
}
export const {
    setListBrand,
 
} = ProviderSlice.actions
export default ProviderSlice.reducer