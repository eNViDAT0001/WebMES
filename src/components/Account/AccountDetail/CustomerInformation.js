import React, { useEffect, useState } from "react";
import User from "./assets/User.png";
import { TextField } from "@mui/material";
import { UserApi } from "../../../api/UserApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";


const CustomerInformation = (props) => {
  const UserDetail = JSON.parse(localStorage.getItem("UserInWeb"));
  const convertDate = (date)=>{
    const newDate = new Date(date)
    return newDate.toISOString().split('T')[0]
  }
  const [birthday,setBirthday]=useState(convertDate(UserDetail.birthday))
  const [isChange,setIsChange] = useState(false)
  const handleChangeDataPicker=(e)=>{
    setBirthday(e.target.value)
    setIsChange(true)
  }
  
  const changeGender = (gender) => {
    if (gender) return "Male";
    else return "Female";
  };
  
  const UpdateUser = async(userID,body)=>{
    await UserApi.UpdateUser(userID, body).then((res) => {
      var userTemp = JSON.parse(localStorage.getItem("UserInWeb"));
      userTemp["birthday"] = birthday;
      localStorage.removeItem("UserInWeb")
      localStorage.setItem("UserInWeb", JSON.stringify(userTemp));
      toast("Cập nhật birthday thành công", {
        type: "success",
        autoClose: 1000,
        Close: setTimeout(() => window.location.reload(), 1000),
      });
    });
  }
  const handleButtonConfirm=(e)=>{
    if(isChange){
      const body={
        "birthday": birthday
      }
      UpdateUser(props.id,body)
    }
  }
  return (
    <div className="flex flex-col p-10">
      <ToastContainer position="top-right" newestOnTop />

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
          id="date"
          label="Birthday"
          type="date"
          defaultValue={birthday}
          onChange={handleChangeDataPicker}
          InputLabelProps={{
            shrink: true,
          }}
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
        
      </div>

      <button className="w-[20%] h-[35px] bg-[#0B74E5] text-white my-[5%]" onClick={handleButtonConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default CustomerInformation;
