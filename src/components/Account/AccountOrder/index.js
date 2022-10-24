
import HeaderBar from "../../StoreOtherComponent/HeaderBar";
import ChangeBarInformation from "../GeneralLayout/ChangeBarInformation";
const AccountOrder = () =>{
    return (
        <div>
            <HeaderBar name1="Home .Account" name2=" . Orders"/>
            <div className="flex justify-center">
                <div className=" w-1200px h-full flex flex-row ">
                    <ChangeBarInformation />
                </div>
            </div>
        </div>
    )
    
};

export default AccountOrder;