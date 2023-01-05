import { createSlice } from '@reduxjs/toolkit'
import { OrderApi } from '../../api/OrderApi'

const initialState = {
    OrderAccount:{},
    filterOrderAccount:{},
    ListOrderInAdmin:{},
    ListOrderDetailInAdmin:{}

}


const OrderSlice = createSlice({
    name:'order',
    initialState,
    reducers:
    {
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


export const FetchOrderInUser = (id) => async(dispatch) =>{
    try {
        const response = await OrderApi.GetOrderFromUser(id)
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
} = OrderSlice.actions
export default OrderSlice.reducer