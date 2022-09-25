
const ChangeBarInformation = () => {
    return(
    <div className="flex flex-col w-214px mt-6 font-['JosefinSans']">
        <div className="ml-5 w-44 flex flex-row mb-10">
            <div className=" ml-2 flex flex-col mt-2 text-left">
                <h1 className="">Nickname</h1>
                <h1>User's Name</h1>
            </div>
        </div>
        <div className="w-full h-30px hover:bg-[#D9D9D9] ">
            <div className="ml-4 flex flex-row items-center ">
                <h1 className="ml-3">Account</h1>
            </div>
        </div>
        <div className="w-full h-30px hover:bg-[#D9D9D9] mt-3">
            <div className="ml-4 flex flex-row items-center ">
                <h1 className="ml-3">Notification</h1>
            </div>
        </div>
        <div className="w-full h-30px hover:bg-[#D9D9D9] mt-3">
            <div className="ml-4 flex flex-row items-center ">
                <h1 className="ml-3">Order</h1>
            </div>
        </div>
        <div className="w-full h-30px hover:bg-[#D9D9D9] mt-3">
            <div className="ml-4 flex flex-row items-center ">
                <h1 className="ml-3">Address</h1>
            </div>
        </div>
        <div className="w-full h-30px hover:bg-[#D9D9D9] mt-3">
            <div className="ml-4 flex flex-row items-center ">
                <h1 className="ml-3">Logout</h1>
            </div>
        </div>
    </div>)
}
export default ChangeBarInformation