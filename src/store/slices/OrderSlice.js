import { createSlice } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { OrderApi } from '../../api/OrderApi'

const initialState = {
    OrderAccount:{},
    nameSearch:"",
    ListOrderInAdmin:{},
    ListOrderDetailInAdmin:{}

}


const OrderSlice = createSlice({
    name:'order',
    initialState,
    reducers:
    {
        resetOrder:()=>initialState,
        setNameSearch:(state,action)=>{
            state.nameSearch=action.payload
        },
        setListOrderInAdmin:(state,action)=>{
            state.ListOrderDetailInAdmin = action.payload
        },
        setOrderInAccount: (state,action) =>{
            state.OrderAccount = action.payload
        },
        setListOrderDetailInAdmin: (state,action)=>{
            state.ListOrderDetailInAdmin = action.payload
        }
    }
})


export const FetchOrderInUser = (id,filter) => async(dispatch) =>{
    try {
        const response = await OrderApi.GetOrderFromUser(id,filter)
        dispatch(setOrderInAccount(response))
    } catch (error) {
        console.log(error)
    }
}

export const FetchOrderInAdmin = () => async (dispatch) => {
    try {
    
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setListOrderDetailInAdmin,
    setListOrderInAdmin,
    setOrderInAccount,
    resetOrder,
    setNameSearch,
} = OrderSlice.actions
export default OrderSlice.reducer