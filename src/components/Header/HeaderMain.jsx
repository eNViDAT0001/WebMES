import React, { useEffect } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GetUserInformationDetail } from "../../store/slices/UserSlice";

export const HeaderMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUserInformationDetail(localStorage.getItem("UserID")));
  });
  const UserDetail = useSelector((state) => state.user.UserDetail);
  const Name = UserDetail.name;
  const Phone = UserDetail.phone;
  const Email = UserDetail.email;
  return (
    <div className="bg-gray-900 text-white">
      <div className="md:flex md:justify-around md:items-center sm:px-12 px-4 bg-[#ffffff19] py-2">
        <div className="md:flex md:items-center">
          <div className="md:flex md:items-center mr-5">
            {Email ? (
              <div className="md:flex md:items-center mr-5">
                <AiOutlineMail className="mx-2" />
                <h1>{Email}</h1>
              </div>
            ) : (
              <Link to="/" className="mx-5 hover:text-teal-400 duration-300">
                Home Page
              </Link>
            )}
          </div>
          {Phone ? (
            <div className="md:flex md:items-center">
              <AiOutlinePhone className="mx-2" />
              <h1> {Phone} </h1>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="md:flex md:items-center ">
          {!Name ? (
            <Link to="/login" className="mx-5 hover:text-teal-400 duration-300">
              Login
            </Link>
          ) : (
            <div  className="md:flex md:items-center ">
              <Link
                to="/detail"
                className="mx-5 hover:text-teal-400 duration-300"
              >
                {Name}
              </Link>
              <Link
                to="/shopping-cart"
                className="hover:text-teal-400 duration-300"
              >
                <AiOutlineShoppingCart />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
