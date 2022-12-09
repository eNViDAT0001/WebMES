import { createSlice } from '@reduxjs/toolkit'
import { AddressApi } from '../../api/AddressApi'
const initialState = {
    CurrentAddress:[],
    UserAddress:[],
    Province:[],
    Ward:[],
    District:[],
}

const AddressSlice = createSlice({
    name:'address',
    initialState,

    reducers:
    {
        setUserAddress: (state,action) =>{
            state.UserAddress = action.payload
        },
        setProvince: (state,action) =>{
            state.Province = action.payload
        },
        setWard: (state,action) =>{
            state.Ward = action.payload
        },
        setDistrict: (state,action) =>{
            state.District = action.payload
        },
        setCurrentAddress: (state,action) =>{
            state.CurrentAddress = action.payload
        },
    },

})

export const fetchAllProvince = () => async(dispatch) =>{
    try{
        const response = await AddressApi.ReadAllProvince()
        dispatch(setProvince(response.data.data))
    }catch(err){
        console.log(err)
    }
}



export const fetchDistrictFromProvince = (idProvince) => async (dispatch) => {
    try {
        if(idProvince!==""){
            const response = await AddressApi.ReadAllDistrict(idProvince)
            dispatch(setDistrict(response.data.data))
        }
    } catch (error) {
        console.log(error)
    }
} 

export const GetDetailAddressByUserId = (idAddress,idUser) => async(dispatch) =>{
    try {
            const response = await AddressApi.DetailByUserID(idAddress,idUser)
            dispatch(setDistrict(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export const GetListAddress = (id)=>async(dispatch)=>{
    try {
        const response = await AddressApi.GetListAddressByUserID(id)
        dispatch(setUserAddress(response.data.data))
    } catch (error) {
        console.log(error)
    }
}

export const AddSaveAddress= (userID,body)=>async(dispatch)=>{
    try {
        const response = await AddressApi.AddSaveAddress(userID,body)
        console.log(response)
        dispatch(setDistrict(response.data.data))
    } catch (error) {
        console.log(error)
    }
}
export const fetchWardFromDistrict = (idDistrict) => async (dispatch) => {
    try {
        if(idDistrict!==""){
            const response = await AddressApi.ReadAllWard(idDistrict)
            dispatch(setWard(response.data.data))
        }
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setProvince,
    setDistrict,
    setWard,
    setCurrentAddress,
    setUserAddress
} = AddressSlice.actions
export default AddressSlice.reducer