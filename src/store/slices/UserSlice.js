import { createSlice } from '@reduxjs/toolkit'
import { AddressApi } from '../../api/AddressApi'
import { UserApi } from '../../api/UserApi'
const initialState = {
    ID: "",
    username: "",
    name: "",
    birthday: "",
    gender: true,
    email: "",
    phone: "",
    Type: ""
}

const AddressSlice = createSlice({
    name:'user',
    initialState,

    reducers:
    {
        setID: (state,action) =>{
            state.ID = action.payload
        },
        setUsername: (state,action) =>{
            state.username = action.payload
        },
        setName: (state,action) =>{
            state.name = action.payload
        },
        setGender: (state,action) =>{
            state.gender = action.payload
        },
        setEmail: (state,action) =>{
            state.email = action.payload
        },
        setPhone: (state,action) =>{
            state.phone = action.payload
        },
        setType: (state,action) =>{
            state.Type = action.payload
        },
    },

})

export const GetUserInformationDetail = (id) => async(dispatch) =>{
    try{
        const response = await UserApi.DetailUser(id)
        const data = response.data
        dispatch(console.log(data))
    }catch(err){
        console.log(err)
    }
}








export const {
    setUsername,
    setEmail,
    setGender,
    setID,
    setName,
    setPhone,
    setType
} = AddressSlice.actions
export default AddressSlice.reducer