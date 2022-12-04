import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../store/slices/AuthSlice";
import { LoginFormReq } from "../../models/AuthForm/LoginFormReq";
import { useState } from "react";
import { Box, Divider, TextField } from "@mui/material";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  //const dataToken = useSelector((state) => state.auth.dataToken);

  const handleChangePassword = (e) => {
    setPasswordText(e.target.value);
  };
  const handleChangeUsername = (e) => {
    setUsernameText(e.target.value);
  };

  const handleLoginButton = () => {
    const body = new LoginFormReq({
      username: usernameText,
      password: passwordText,
    });

    dispatch(Login(body));
  };

  return (
    <div className="w-[60%] w-max-[200px] shadow-lg border p-[50px] mb-20 min-w-[300px]">
      <div className="flex justify-center items-center flex-col">
        <h1 className=" font-[Josefin_Sans] text-[32px]">Login</h1>
        <h1 className="font-[Lato] mt-2 text-[#9096B2]">
          Please login using account detail below
        </h1>
      </div>

      <div className="flex flex-col mt-8">
        <div className="w-full mr-5">
          <div className=" flex items-center flex-col space-y-8">
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Name Account"
                id="outlined-required"
                size="small"
                variant="standard"
                onChange={handleChangeUsername}
              />
            </Box>
            <Box
              sx={{
                width: 500,
                maxWidth: "100%",
              }}
            >
              <TextField
                fullWidth
                label="Password"
                id="outlined-required"
                size="small"
                variant="standard"
                onChange={handleChangePassword}
              />
            </Box>
          </div>
          <h1 className="font-[Lato] mt-3 text-[#9096B2] hover:underline">
            Forgot your password?
          </h1>
          <button
            className="w-full h-[40px] h-max-[70px] bg-[#FF1788] text-white  mt-5 mb-5"
            onClick={handleLoginButton}
          >
            Sign in
          </button>
        </div>
        <Divider>Or</Divider>
        <div className="w-full h-[100%] mt-4">
          <div className="flex flex-row">
            <FacebookLoginButton text="Facebook" iconSize="20px" size="40px" />
            <GoogleLoginButton text="Google" iconSize="20px" size="40px" />
          </div>
        </div>
      </div>
      <Link
        to="/register"
        className="flex justify-center font-[Lato] mt-3 text-[#9096B2] hover:underline"
      >
        Don't have an Account? Create Account
      </Link>
    </div>
  );
};
