
import HeaderBar from "../../StoreOtherComponent/HeaderBar";
import ChangeBarInformation from "../GeneralLayout/ChangeBarInformation";
import OrderTab from "./OrderTab";
const AccountOrder = () =>{
    return (
        <div>
            <HeaderBar name1="Home .Account" name2=" . Orders"/>
            <div className="flex justify-center">
                <div className=" w-[85%] h-full flex flex-row ">
                    <ChangeBarInformation />
                    <OrderTab />
                </div>
            </div>
        </div>
    )
    
};

export default AccountOrder;