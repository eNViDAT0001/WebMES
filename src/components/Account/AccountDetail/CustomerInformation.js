
import User from './assets/User.png'

const CustomerInformation = () =>{
    return (
        <div className='flex flex-col '>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <h1 className="text-xl text-[#1D1378]">Information</h1>
                        <img src={User} className='w-[12%] h-[12%] min-w-[120px] min-h-[120px]' alt="anh user"></img>
                    </div>
                    <div className='flex flex-col'>
                        <div className = "ml-[5%] mt-[4%] font-['Lato']">
                            <h1>Full name</h1>
                            <input type="text" className='min-w-[250px] min-h-[36px] p-2 border'></input>
                        </div>
                        <div className = "ml-[5%] mt-[4%] font-['Lato']">
                            <h1>Nick name</h1>
                            <input type="text" className='min-w-[250px] min-h-[36px] p-2 border'></input>
                        </div>
                    </div> 
                </div>
                <div className="flex flex-row justify-start space-x-2 font-['Lato']">
                        <div>
                            <h1>Birthday</h1>
                            <input type="text" className='min-w-[277px] min-h-[36px] p-2 border'></input>
                        </div>
                        <div>
                            <h1>Phone number</h1>
                            <input type="text" className='min-w-[166px] min-h-[36px] p-2 border'></input>
                        </div>
                        <div>
                            <h1>Gender</h1>
                            <input type="text" className=' min-w-[115px] min-h-[36px] p-2 border'></input>
                        </div>
                </div>
                <div>
                        <h1>Address</h1>
                        <input type="text" className='w-[96%] p-2 border'></input>
                </div>
                <div className="flex flex-row justify-start space-x-2 font-['Lato']">
                        <div>
                            <h1>Province</h1>
                            <input type="text" className='min-w-[277px] min-h-[36px] p-2 border'></input>
                        </div>
                        <div>
                            <h1>District</h1>
                            <input type="text" className='min-w-[166px] min-h-[36px] p-2 border'></input>
                        </div>
                        <div>
                            <h1>Ward</h1>
                            <input type="text" className=' min-w-[115px] min-h-[36px] p-2 border'></input>
                        </div>
                </div>
                <button className="w-[20%] h-[35px] bg-[#0B74E5] text-white my-[5%]">Confirm</button>     
            </div>
    )
};

export default CustomerInformation;