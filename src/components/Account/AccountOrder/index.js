
import { Fragment } from "react";
import HeaderBarAccountOrder from "../GeneralLayout/HeaderBarAccountOrder";
import ChangeBarInformation from "../GeneralLayout/ChangeBarInformation";
const AccountOrder = () =>{
    return (
        <Fragment>
            <HeaderBarAccountOrder />
            <div className="flex justify-center">
                <div className=" w-1200px h-full flex flex-row ">
                    <ChangeBarInformation />
                </div>
            </div>
        </Fragment>
    )
    
};

export default AccountOrder;