import { createSlice } from '@reduxjs/toolkit'
import { AuthApi } from '../../api/userApi'


const initialState = {
    dataToken:{}
}
const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setData : (state,action) =>
        {
            state.dataToken = action.payload
        },

    }
})

export const Login = (body) => async (dispatch) => {
    try {
        const response = await AuthApi.LoginUser({})
        dispatch(setData(response))
    } catch (error) {
        console.log(error)
    }
}

export const Register = (body) => async (dispatch) => {
    try {
        const response = await AuthApi.RegisterUser(body)
        dispatch(setData(response))
    } catch (error) {
        console.log(error)
    }
}

export const {
    setData,
} = AuthSlice.actions
export default AuthSlice.reducer

