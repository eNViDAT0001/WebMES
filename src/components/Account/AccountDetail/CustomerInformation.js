import React, { useEffect, useState } from "react";
import User from "./assets/User.png";
import { TextField } from "@mui/material";
const CustomerInformation = (props) => {
  const [UserDetail, setUserDetail] = useState(JSON.parse(localStorage.getItem("UserInWeb")));
  
  const changeGender = (gender) => {
    if (gender) return "Male";
    else return "Female";
  };
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
            defaultValue={UserDetail.name}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Nick name"
            defaultValue={UserDetail.username}
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
            defaultValue={UserDetail.birthday}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Phone"
            defaultValue={UserDetail.phone}
            InputProps={{
              readOnly: true,
            }}
            variant="standard"
          />
          <TextField
            id="standard-read-only-input"
            label="Gender"
            defaultValue={changeGender(UserDetail.gender)}
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
