import React from 'react'
export const RegisterForm = () => {
  return (
    <div className="w-[60%] w-max-[200px] shadow-lg border p-[50px]">
        <div className=" flex items-center flex-col">
            <h1 className=' font-[Josefin_Sans] text-[32px]'>Sign up Form</h1>
            <h1 className="font-[Lato] mt-2 text-[#9096B2]">Please fill your information detail below</h1>            
        </div>   
        <div className='flex flex-col'>
            <h1 className='mt-7 mb-1 whitespace-nowrap'>Name Account :</h1>
            <input type="text" placeholder='Input Name Account' className=' w-full w-max-[150px] h-full p-2 border-b-2 border-[#27A69E] '></input>
            <h1 className='mt-7 mb-1 whitespace-nowrap'>Email :</h1>
            <input type="text" placeholder='Email address' className=' w-full w-max-[150px] h-full p-2 border-b-2 border-[#27A69E]  mr-12'></input>
            <h1 className='mt-7 mb-1 '>Password :</h1>
            <input type="text" placeholder='Input Password' className='w-[30%] w-max-[150px] h-[10%] p-2 border-b-2 border-[#27A69E] '></input>
            <h1 className='mt-7 mb-1 '>Phone :</h1>
            <input type="text" placeholder='Input Your phone' className='w-[30%] w-max-[150px] h-[10%] p-2 border-b-2 border-[#27A69E] '></input>
            <div className="my-7 flex flex-row justify-start ">
                    <div className="flex flex-row items-center">
                    </div> 
                        <div className=' flex-row items-center w-full max-w-[250px] flex flex-wrap'>
                            <h1 className=' mr-4 whitespace-nowrap'>Gender :</h1>
                                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id="flexRadioDefault1" />
                                <label class="mr-4 form-check-label inline-block text-gray-800" for="flexRadioDefault1">
                                    Male
                                </label>
                                <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" 
                                type="radio" 
                                name="flexRadioDefault" 
                                id="flexRadioDefault2" />
                                <label class="form-check-label inline-block text-gray-800" for="flexRadioDefault2">
                                    Female
                                </label>
                        </div>
                </div>
                
            </div>
        <button className="w-full h-[40px] bg-[#FF1788] text-white "> Sign Up</button>   
    </div>
  )
}
