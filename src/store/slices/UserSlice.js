import { createSlice } from "@reduxjs/toolkit";
import { UserApi } from "../../api/UserApi";
const initialState = {
  UserDetail: {},
};

const UserSlices = createSlice({
  name: "user",
  initialState,

  reducers: {
    setUserDetail: (state, action) => {
      state.UserDetail = action.payload;
    },
  },
});

export const GetUserInformationDetail = (id) => async (dispatch) => {
  try {
    if (localStorage.getItem("UserID") !== undefined) {
      const response = await UserApi.DetailUser(id);
      dispatch(setUserDetail(response.data.data));
    }else{
      const reset={}
      dispatch(setUserDetail(reset))
    }
  } catch (err) {
    console.log(err);
  }
};

export const { setUserDetail } = UserSlices.actions;
export default UserSlices.reducer;
