import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Register } from "../../store/slices/AuthSlice";
const TextFormRegister = (props) => {
  return (
    <div>
      <h1 className={props.classNameText}>{props.setName}</h1>
      <input
        type="text"
        placeholder={props.placeholder}
        className={props.className}
      ></input>
    </div>
  );
};

const ChoiceTwoOption = (props) => {
  return (
    <div className="my-7 flex flex-row justify-start ">
      <div className="flex flex-row items-center"></div>
      <div className=" flex-row items-center w-full max-w-[250px] flex flex-wrap">
        <h1 className=" mr-4 whitespace-nowrap">Gender :</h1>
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label
          className="mr-4 form-check-label inline-block text-gray-800"
          for="flexRadioDefault1"
        >
          {props.option1}
        </label>
        <input
          className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label
          className="form-check-label inline-block text-gray-800"
          for="flexRadioDefault2"
        >
          {props.option2}
        </label>
      </div>
    </div>
  );
};
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const register = useSelector((state) => state.auth.RegisterForm);

  const activeRegister = () =>{
    
  }

  return (
    <div className="w-[60%] w-max-[200px] shadow-lg border p-[50px]">
      <div className=" flex items-center flex-col">
        <h1 className=" font-[Josefin_Sans] text-[32px]">Sign up Form</h1>
        <h1 className="font-[Lato] mt-2 text-[#9096B2]">
          Please fill your information detail below
        </h1>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row justify-between flex-wrap">
          <div className="flex flex-col w-[40%]">
            <TextFormRegister
              setName="Name Account :"
              placeholder="Input Name Account"
              classNameText="mt-7 mb-1 whitespace-nowrap"
              className="w-full w-max-[150px] w-min-[50px] h-max-[50px]  p-2 border-b-2 border-[#27A69E]"
            />
            <TextFormRegister
              setName="Email :"
              placeholder="Input Email"
              classNameText="mt-7 mb-1 whitespace-nowrap"
              className=" w-full w-max-[150px] w-min-[50px] h-max-[50px] p-2 border-b-2 border-[#27A69E]  mr-12"
            />
          </div>
          <div className="flex flex-col ml-4">
            <ChoiceTwoOption option1="Male" option2="Female" />
            <TextFormRegister
              setName="Password :"
              classNameText="mt-[45px] mb-1 whitespace-nowrap"
              placeholder="Input Password"
              className=" w-full w-max-[150px] h-max-[50px] p-2 border-b-2 border-[#27A69E] "
            />
          </div>
        </div>
        <div className="flex flex-row justify-between"></div>

        <TextFormRegister
          setName="Phone :"
          classNameText="mt-10 mb-1 whitespace-nowrap"
          placeholder="Input Phone"
          className=" w-[30%] w-max-[150px] h-[10%] p-2 border-b-2 border-[#27A69E]"
        />
      </div>
      <button
        className="w-full h-[40px] bg-[#FF1788] text-white mt-10"
        onClick={activeRegister}
      >
        Sign Up
      </button>
    </div>
  );
};
