import React, { useEffect, useState } from "react";
import User from "./assets/User.png";
import { useDispatch, useSelector } from "react-redux";
import { GetUserInformationDetail } from "../../../store/slices/UserSlice";
import { TextField } from "@mui/material";
const CustomerInformation = () => {

  const UserDetail = useSelector((state) => state.user.UserDetail);
  const [userInfo, setUserInfo] = useState(
    {
      fullName: UserDetail.name,
      nickName: UserDetail.username,
      birthday: UserDetail.birthday,
      gender: (UserDetail.gender) ? "Male" :"Female",
      phone: UserDetail.phone ,
    }
  )
  const dispatch = useDispatch();
  const userID = localStorage.getItem("UserID")
  useEffect(() => {
    dispatch(GetUserInformationDetail(userID));
  }, [dispatch,userID]);
  
  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-row">
        <div className="flex flex-col pr-20 flex-wrap">
          <h1 className="text-xl text-[#1D1378]">Information</h1>
          <img
            src={User}
            className="w-[12%] h-[12%] min-w-[120px] min-h-[120px]"
            alt="anh user"
          ></img>
        </div>
        <div className="flex flex-col mt-4 ml-2 space-y-4">
          <TextField
            id="standard-read-only-input"
            label="Full name"
            defaultValue={userInfo.fullName}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Nick name"
            defaultValue={userInfo.nickName}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
      </div>
      <div className="space-y-5">
        <div className="flex flex-row justify-start space-x-7  font-['Lato']">
          <TextField
            id="standard-read-only-input"
            label="Birthday"
            defaultValue={userInfo.birthday}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Phone"
            defaultValue={userInfo.phone}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Gender"
            defaultValue={userInfo.gender}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
        </div>
        <div className="flex flex-row justify-start space-x-5 font-['Lato']">
          <TextField
            id="standard-read-only-input"
            label="Province"
            defaultValue="Province"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="District"
            defaultValue="Hello World"
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="outlined-read-only-input"
            label="Ward"
            defaultValue="Hello World"

            variant="standard"
            InputProps={{
              readOnly: true,
            }}
          />
        </div>
      </div>

      <button className="w-[20%] h-[35px] bg-[#0B74E5] text-white my-[5%]">
        Confirm
      </button>
    </div>
  );
};

export default CustomerInformation;
