import React from 'react'
import { Link } from "react-router-dom";

export const HeaderUser = () => {
  return (
    <div className="bg-white shadow-sm ">
        <div className="md:flex md:justify-around md:items-center sm:px-12 px-4 bg-white py-2">
          <div className="md:flex md:items-center">
            <Link to="/" className="text-gray-800 text-4xl font-semibold ">MES</Link>
            <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-5 gap-10 md:items-center text-gray-900 text-2xl ml-10">
                <Link to="/" className="text-gray-800 hover:text-[#FB2E86] duration-300">Home</Link>
                <Link to="/category" className="text-gray-800 hover:text-[#FB2E86] duration-300" >Products</Link>
                <Link to="/order" className="text-gray-800 hover:text-[#FB2E86] duration-300" >Order</Link>
                <Link to="/contact" className="text-gray-800 hover:text-[#FB2E86] duration-300" >Contact</Link>
              </div>
          </div>

          <div className="md:items-center ">
            <input
              type="text"
              placeholder="Enter..."
              className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 border rounded px-2 focus:outline-none"
            ></input>
            <button className="bg-slate-600 hover:bg-slate-700 duration-300 px-5 py-2.5 rounded-md text-white">
              Search
            </button>
          </div>
        </div>
      </div>
  )
}
