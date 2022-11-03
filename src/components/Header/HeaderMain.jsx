 import React from 'react'
 import {
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineShoppingCart,
  } from "react-icons/ai";
  import { Link } from "react-router-dom";
 export const HeaderMain = () => {
   return (
    <div className="bg-gray-900 text-white">
        <div className="md:flex md:justify-around md:items-center sm:px-12 px-4 bg-[#ffffff19] py-2">
          <div className="md:flex md:items-center">
            <div className="md:flex md:items-center mr-5">
              <AiOutlineMail className="mx-2" />
              <Link to="/detail"> mhhasanul@gmail.com </Link>
            </div>
            <div className="md:flex md:items-center">
              <AiOutlinePhone className="mx-2" />
              <h1> 09123573892 </h1>
            </div>
          </div>
          <div className="md:flex md:items-center ">
            <Link to="/login" className="mx-5 hover:text-teal-400 duration-300" >Login</Link>
            <Link to="/shopping-cart" className="hover:text-teal-400 duration-300" ><AiOutlineShoppingCart /></Link>
          </div>
        </div>
      </div>
   )
 }
 