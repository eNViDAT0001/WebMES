import Account from '../../../assets/Account.png'
import AvatarBig from '../../../assets/AvatarBig.png'
import Notification from '../../../assets/Notification.png'
import Order from '../../../assets/Order.png'
import Address from '../../../assets/Address.png'
import LogOut from '../../../assets/LogOut.png'

const SlideBarData = [
    {
        id: 1,
        title: "Account",
        img: Account,
    },
    {
        id: 2,
        title: "Notification",
        img: Notification,
    },
    {
        id: 3,
        title: "Order",
        img: Order,
    },
    {
        id: 4,
        title: "Address",
        img: Address,
    },
    {
        id: 5,
        title: "Logout",
        img: LogOut,
    },
]
const ChangeBarInformation = () => {
    return(
    <div className="flex flex-col w-214px mt-6 font-['Josefin_Sans']">
        <div className="ml-5 w-44 flex flex-row flex-nowrap mb-10">
            <img src = {AvatarBig} alt = "avatar" className="w-55px h-55px"></img>
            <div className=" ml-2 flex flex-col mt-2 text-left ">    
                <h1 className="drop-shadow-2xl">Nickname</h1>
                <h1 className="drop-shadow-2xl">User's Name</h1>
            </div>
        </div>
        <div className = "space-y-4">
            {SlideBarData.map(data=>(
                <div key = {data.id} className="flex flex-col">
                    <div className="w-full h-30px hover:bg-[#D9D9D9] space-y-4">
                        <div className="ml-4 flex flex-row items-center ">
                            <img src = {data.img} alt = "Account" className = "w-30px h-30px"></img>
                            <h1 className="ml-3">{data.title}</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    </div>)
}
export default ChangeBarInformation