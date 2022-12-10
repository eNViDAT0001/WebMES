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
  if (id !== "undefined") {
    try {
      if (localStorage.getItem("UserID") !== undefined) {
        const response = await UserApi.DetailUser(id);
        dispatch(setUserDetail(response.data.data));
      }
    } catch (err) {
      console.log(err);
    }
  }
  else{
    console.log("Day la guest")
  }
};

export const { setUserDetail } = UserSlices.actions;
export default UserSlices.reducer;
