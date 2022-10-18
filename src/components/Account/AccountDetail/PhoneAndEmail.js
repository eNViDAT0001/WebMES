import React from 'react'
import Phone from './assets/Phone.svg'
import Mail from './assets/Mail.svg'
import Lock from './assets/Lock.png'
const PhoneAndEmail = () => {
  return (
    <div className='w-[28%]'>
        <div className='ml-2 w-full bg-[#F8F8FD] h-full border-l py-2 px-7'>
            <h1 className='text-xl text-[#1D1378]'>Phone number and email</h1>
            <div>
                <div className='flex flex-row justify-between mt-3'>
                    <img src={Phone} className="min-w-[22px] min-h-[22px]" alt="phone"></img>
                    <div className='flex flex-col ml-2'>
                        <h1>Phone number</h1>
                        <h1>23456789</h1>
                    </div>
                    <button className="w-[76px] h-[34px] border-[#151875] text-[#1D3178] border rounded-xl mt-2">Update</button>     
                </div>
                <div className='flex flex-row justify-between mt-3'>
                    <img src={Mail} className="min-w-[22px] min-h-[22px]" alt="mail"></img>
                    <div className='flex flex-col ml-2'>
                        <h1>Email</h1>
                        <h1>abc@gmail.com</h1>
                    </div>
                    <button className="w-[76px] h-[34px] border-[#151875] text-[#1D3178] border rounded-xl mt-2">Update</button>     
                </div>
            </div>
            <h1 className='mt-6 text-xl text-[#1D1378]'>Password</h1>
            <div>
                <div className='mt-4 flex flex-row justify-between'>
                    <img src={Lock} className="w-[32px] h-[32px] " alt="password" ></img>
                    <div className='flex flex-col ml-2'>
                        <h1>Password</h1>
                        <h1>*********</h1>
                    </div>
                    <button className="w-[76px] h-[34px] border-[#151875] text-[#1D3178] border rounded-xl mt-2 ">Update</button>     
                </div>
            </div>
        </div>
    </div>
  )
}

export default PhoneAndEmail
