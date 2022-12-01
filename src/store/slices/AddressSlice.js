import { createSlice } from '@reduxjs/toolkit'
import { ListDistrict, ListProvince, ListWard } from '../../dummy_database/AddressDummyDatabase' 

const initialState = {
    Province:[],
    Ward:[],
    District:[],
}

const AddressSlice = createSlice({
    name:'address',
    initialState,

    reducers:
    {
        setProvince: (state,action) =>{
            state.Province = action.payload
        },
        setWard: (state,action) =>{
            state.Ward = action.payload
        },
        setDistrict: (state,action) =>{
            state.District = action.payload
        }
    },

})

export const fetchAllProvince = () => async(dispatch) =>{
    try{
        const response = await ListProvince
        dispatch(setProvince(response))
    }catch(err){
        console.log(err)
    }
}

export const fetchProvince = (id) => async (dispatch) => {
    try {
        const response = await ListProvince[id]
        dispatch(setProvince(response))
    } catch (error) {
        console.log(error)
    }
} 

export const fetchDistrictFromProvince = (idProvince) => async (dispatch) => {
    try {
        
        const response = await ListDistrict.filter((data) => data.provinceID.id == idProvince)
        dispatch(setDistrict(response))
    } catch (error) {
        console.log(error)
    }
} 

export const fetchAllDistrict = () => async (dispatch) => {
    try {
        
        const response = await ListDistrict
        dispatch(setDistrict(response))
    } catch (error) {
        console.log(error)
    }
} 

export const fetchWardFromDistrict = (idDistrict) => async (dispatch) => {
    try {
        
        const response = await ListWard.filter((data) => data.districtID.id == idDistrict)
        dispatch(setWard(response))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProvince,
    setDistrict,
    setWard
} = AddressSlice.actions
export default AddressSlice.reducer