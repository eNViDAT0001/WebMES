import React from "react";
import Phone from "./assets/Phone.svg";
import Mail from "./assets/Mail.svg";
import Lock from "./assets/Lock.png";
import Popup from "reactjs-popup";
import { FormUpdatePhone } from "./FormUpdatePhone";
import { FormUpdateEmail } from "./FormUpdateEmail";
import { FormResetPassword } from "./FormResetPassword";


const PhoneAndEmail = (props) => {
  const UserDetail = JSON.parse(localStorage.getItem("UserInWeb"))
  const PhoneInformation = UserDetail.phone;
  const Email = UserDetail.email;
  return (
    <div className="w-[30%]">
      <div className="ml-2 w-full bg-[#F8F8FD] h-full border-l py-10 px-7">
        <h1 className="text-xl text-[#1D1378]">Phone number and email</h1>
        <div>
          <div className="flex flex-row justify-between mt-3">
            <img
              src={Phone}
              className="min-w-[22px] min-h-[22px]"
              alt="phone"
            ></img>
            <div className="flex flex-col ml-2">
              <h1>Phone number</h1>
              <h1>{PhoneInformation}</h1>
            </div>
            <Popup
              trigger={
                <button className="w-[76px] h-[34px] border-[#151875] text-[#1D3178] border rounded-xl mt-2">
                  Update
                </button>
              }
              position="left bottom"
              nested
            >
              <FormUpdatePhone id={props.id} phone={PhoneInformation} />
            </Popup>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <img
              src={Mail}
              className="min-w-[22px] min-h-[22px]"
              alt="mail"
            ></img>
            <div className="flex flex-col ml-2">
              <h1>Email</h1>
              <h1>{Email}</h1>
            </div>
            <Popup
              trigger={
                <button className="w-[76px] h-[34px] border-[#151875] text-[#1D3178] border rounded-xl mt-2">
                  Update
                </button>
              }
              position="left bottom"
              nested
            >
              <FormUpdateEmail id={props.id} email={Email} />
            </Popup>
          </div>
        </div>
        <h1 className="mt-6 text-xl text-[#1D1378]">Password</h1>
        <div>
          <div className="mt-4 flex flex-row justify-between">
            <img src={Lock} className="w-[32px] h-[32px] " alt="password"></img>
            <div className="flex flex-col ml-2">
              <h1>Password</h1>
              <h1>*********</h1>
            </div>
            <Popup
              trigger={
                <button className="w-[76px] h-[34px] border-[#151875] text-[#1D3178] border rounded-xl mt-2">
                  Update
                </button>
              }
              position="left bottom"
              nested
            >
              <FormResetPassword id={props.id} />
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAndEmail;
