import { createSlice } from '@reduxjs/toolkit'
import { OrderList } from '../../dummy_database/OrderDummyDatabase' 

const initialState = {
    OrderAccount:[],
    Cart: [],
}


const OrderSlice = createSlice({
    name:'order',
    initialState,
    reducers:
    {
        setOrderInAccount: (state,action) =>{
            state.OrderAccount = action.payload
        }
    }
})

export const fetchOrderIn = (id) => async (dispatch) => {
    try {
        const response = await OrderList
        dispatch(setOrderInAccount(response))
    } catch (error) {
        console.log(error)
    }
} 
export const {
    setOrderInAccount,
} = OrderSlice.actions
export default OrderSlice.reducer