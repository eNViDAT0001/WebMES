import React from 'react'

export const OrderCompletedHeaderBar = () => {
  return (
    <div className="w-full h-[286px] bg-gray-header flex justify-center">
        <div className="min-w-[200px] w-[85%] flex justify-center flex-col">
            <h1 className=' text-[#101075] text-4xl font-normal'>Order Completed</h1>
            <div className='flex flex-row mt-3'>
                <h1>Home. Pages</h1>
                <h1 className="text-pink-500 ">. Order completed</h1>
            </div>
            
        </div>
    </div>
  )
}
