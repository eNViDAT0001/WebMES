import { createSlice } from '@reduxjs/toolkit'
import { ProductApi } from '../../api/ProductApi'



const initialState = {
    comment: {},
}
const CommentSlice = createSlice({
    name:"comment",
    initialState,
    reducers:{
        resetComment:()=>initialState,
        setComment : (state,action) =>
        {
            state.comment = action.payload
        },

    }
})

export const fetchAllComment = (id,filters) => async (dispatch) => {
    try {
        const response = await ProductApi.GetComment(id,filters)
        dispatch(setComment(response))
    } catch (error) {
        console.log(error)
    }
}


export const {
    setComment,
    setFilters,
    resetComment,
} = CommentSlice.actions
export default CommentSlice.reducer

