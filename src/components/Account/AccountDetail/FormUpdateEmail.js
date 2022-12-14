import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { UserApi } from "../../../api/UserApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

export const FormUpdateEmail = (props) => {
  const userID = props.id
  const [email,setEmail] = useState(props.email)
  const changeEmail=(e)=>{
    setEmail(e.target.value)
  }  
  const updateEmail = (e)=>{
    const body = {
      "email": email,
    }
    Update(userID,body)
  }

  const Update = async(userID,body) =>{
    await UserApi.UpdateUser(userID,body)
    .then((res)=>
    {
      toast("Cập nhật email thành công",{
        type: "success",
        autoClose:1000,
        Close: setTimeout(() => window.location.replace(`/`), 1000)
      })
    })
  }
  return (
    <div className="w-[350px] h-[175px] bg-[#F8F8FD] flex justify-center flex-col p-10 space-y-6">
      <ToastContainer position="top-right" newestOnTop />

      <h1 className="text-xl text-[#1D1378] align-middle">Update Email</h1>
      <TextField size="small" 
      defaultValue={email}
      onChange={changeEmail}/>
      <Button 
      variant="contained" 
      endIcon={<ChangeCircleIcon />}
      onClick={updateEmail}
      >
        Send
      </Button>{" "}
    </div>
  );
};
