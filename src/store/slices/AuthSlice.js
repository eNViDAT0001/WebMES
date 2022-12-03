import { createSlice } from '@reduxjs/toolkit'
import { AuthApi } from '../../api/userApi'


const initialState = {
    dataToken:{
        access_token: "",
        access_token_expiry: 0,
        refresh_token: "",
        refresh_token_expiry: 0
    }
}

const AuthSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setAccessToken : (state,action) =>
        {
            state.dataToken.accessToken = action.payload
        },
        setAccessTokenExpiry : (state,action) =>
        {
            state.dataToken.accessTokenExpiry = action.payload
        },
        setRefreshToken : (state,action) =>
        {
            state.dataToken.refreshToken = action.payload
        },
        setRefreshTokenExpiry : (state,action) =>
        {
            state.dataToken.refreshTokenExpiry = action.payload
        },
        setData: (state,action) =>{
            state.dataToken = action.payload
        }

    }
})

export const Login = (body) => async(dispatch) => {
    try {
        await AuthApi.LoginUser(body)
        .then((res)=>res.json())
        .then((data) =>  {
            
            dispatch(setData(data))
        }
        )
    } catch (error) {
        console.log(error)
    }
}

/*export const Register = (body) => async (dispatch) => {
    try {
        const response = await AuthApi.RegisterUser(body)
        dispatch(setData(response))
    } catch (error) {
        console.log(error)
    }
}*/

export const {
    setAccessToken,
    setAccessTokenExpiry,
    setRefreshToken,
    setRefreshTokenExpiry,
    setData
} = AuthSlice.actions
export default AuthSlice.reducer

