import { createSlice } from "@reduxjs/toolkit";
import { UserApi } from "../../api/UserApi";
const initialState = {
  UserDetail: {}
};

const UserSlices = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUserDetail:(state,action)=>{
        state.UserDetail = action.payload
    }
  },
});

export const GetUserInformationDetail = (id) => async (dispatch) => {
  try {
    const response = await UserApi.DetailUser(id);
    //console.log(response.data.data)
    dispatch(setUserDetail(response.data.data))
  } catch (err) {
    console.log(err);
  }
};

export const {
  setUserDetail
} = UserSlices.actions;
export default UserSlices.reducer;
