import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { UserApi } from "../../../api/UserApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

export const FormUpdatePhone = (props) => {
  const userID = props.id;
  const [phone, setPhone] = useState(props.phone);
  const changePhone = (e) => {
    setPhone(e.target.value);
  };
  const updatePhone = (e) => {
    const body = {
      phone: phone,
    };
    Update(userID, body);
  };

  const Update = async (userID, body) => {
    await UserApi.UpdateUser(userID, body).then((res) => {
      var userTemp = JSON.parse(localStorage.getItem("UserInWeb"));
      userTemp["phone"] = phone;
      localStorage.setItem("UserInWeb", JSON.stringify(userTemp));
      toast("Cập nhật phone thành công", {
        type: "success",
        autoClose: 1000,
        Close: setTimeout(() => window.location.reload(), 1000),
      });
    });
  };
  return (
    <div className="w-[250px] h-[175px] bg-[#F8F8FD] flex justify-center flex-col p-10 space-y-6">
      <ToastContainer position="top-right" newestOnTop />
      <h1 className="text-xl text-[#1D1378] align-middle">Update Phone</h1>
      <TextField size="small" defaultValue={phone} onChange={changePhone} />
      <Button
        variant="contained"
        endIcon={<ChangeCircleIcon />}
        onClick={updatePhone}
      >
        Send
      </Button>{" "}
    </div>
  );
};
