import { Fragment } from "react";
import {
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import "./Header.css";
const Header = (props) => {

  const onLoginClickHandler = () => {

  }
  const onCartClickHandler = () => {

  }
  const onHomeClickHandler = () => {

  }
  const onProductsClickHandler = () => {
    
  }
  const onOrderClickHandler = () => {
    
  }
  const onContactClickHandler = () => {
    
  }
  return (
    <div>
      <div className="bg-gray-900 text-white">
        <div className="md:flex md:justify-around md:items-center sm:px-12 px-4 bg-[#ffffff19] py-2">
          <div className="md:flex md:items-center">
            <div className="md:flex md:items-center mr-5">
              <AiOutlineMail className="mx-2" />
              <h1> mhhasanul@gmail.com </h1>
            </div>
            <div className="md:flex md:items-center">
              <AiOutlinePhone className="mx-2" />
              <h1> 09123573892 </h1>
            </div>
          </div>
          <div className="md:flex md:items-center ">
            <button className="mx-5 hover:text-teal-400 duration-300" onClick={onLoginClickHandler}>
              Login
            </button>
            <button className="hover:text-teal-400 duration-300" onClick={onCartClickHandler}>
              <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-sm ">
        <div className="md:flex md:justify-around md:items-center sm:px-12 px-4 bg-white py-2">
          <div className="md:flex md:items-center">
            <h1 className="text-gray-800 text-4xl font-semibold ">MES</h1>
            <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-5 gap-10 md:items-center text-gray-900 text-2xl ml-10">
                <button className="text-gray-800 hover:text-[#FB2E86] duration-300" onClick={onHomeClickHandler}>Home</button>
                <button className="text-gray-800 hover:text-[#FB2E86] duration-300" onClick={onProductsClickHandler}>Products</button>
                <button className="text-gray-800 hover:text-[#FB2E86] duration-300" onClick={onOrderClickHandler}>Order</button>
                <button className="text-gray-800 hover:text-[#FB2E86] duration-300" onClick={onContactClickHandler}>Contact</button>
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
    </div>
  );
};

export default Header;
