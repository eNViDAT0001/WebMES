import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Login } from "../../store/slices/AuthSlice";
import {LoginFormReq} from '../../models/AuthForm/LoginFormReq'
import { useState } from "react";



export const LoginForm = () => {
  const dispatch = useDispatch();
  const [usernameText,setUsernameText] = useState("")
  const [passwordText,setPasswordText] = useState("")

  const dataToken = useSelector((state) => state.auth.dataToken);

  const handleChangePassword = (e) =>{
    setPasswordText(e.target.value)
  }
  const handleChangeUsername = (e) =>{
    setUsernameText(e.target.value)
  }

  const handleLoginButton = () =>{
    const body = new LoginFormReq({
      username : usernameText,
      password : passwordText,
    })
    dispatch(Login(body))
  }
  console.log(dataToken)
  return (
    <div className="w-[80%] w-max-[200px] shadow-lg border p-[50px]">
      <div className="flex justify-center items-center flex-col">
        <h1 className=" font-[Josefin_Sans] text-[32px]">Login</h1>
        <h1 className="font-[Lato] mt-2 text-[#9096B2]">
          {" "}
          Please login using account detail below
        </h1>
      </div>

      <div className="flex flex-row items-center justify-between ">
        <div className="w-[60%] mr-5">
          <div className=" flex items-center flex-col">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded-md mt-9"
              onChange={handleChangeUsername}

            ></input>
            <input
              type="text"
              placeholder="Password"
              className="w-full p-2 border rounded-md mt-5"
              onChange={handleChangePassword}

            ></input>
          </div>
          <h1 className="font-[Lato] mt-3 text-[#9096B2] hover:underline">
            Forgot your password?
          </h1>
          <button className="w-full h-[13%] h-max-[47px] bg-[#FF1788] text-white  mt-5 mb-5"
          onClick={handleLoginButton}>
            Sign in
          </button>
        </div>
        <div className="w-[50%] h-[100%]">
          <div className="px-[20px] py-[60px] border-l-2">
            <FacebookLoginButton
              text="Facebook"
              iconSize="20px"
              size="40px"
            />
            <GoogleLoginButton
              text="Google"
              iconSize="20px"
              size="40px"
            />
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
