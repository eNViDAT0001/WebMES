import React from 'react'
import { Link } from 'react-router-dom'
export const LoginForm = () => {
  return (
    <div className="w-[50%] w-max-[200px] shadow-lg border p-[50px]">
        <div className=" flex items-center flex-col">
            <h1 className=' font-[Josefin_Sans] text-[32px]'>Login</h1>
            <h1 className="font-[Lato] mt-2 text-[#9096B2]">Please login using account detail below</h1>

            <input type="text" placeholder='Email address' className='w-full p-2 border rounded-md mt-9'></input>
            <input type="text" placeholder='Password' className='w-full p-2 border rounded-md mt-5'></input>
        </div>   
        <h1 className="font-[Lato] mt-3 text-[#9096B2] hover:underline">Forgot your password?</h1>
        <button className="w-full h-[13%] h-max-[47px] bg-[#FF1788] text-white  mt-5 mb-5"> Sign in</button>   
        <Link to="/register" className="flex justify-center font-[Lato] mt-3 text-[#9096B2] hover:underline">Don't have an Account? Create Account</Link>
    </div>
  )
}
