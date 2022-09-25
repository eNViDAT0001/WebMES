
import { Fragment } from "react";
import HeaderBarAccountDetail from "../GeneralLayout/HeaderBarAccountDetail";
import ChangeBarInformation from "../GeneralLayout/ChangeBarInformation";
const AccountDetail = () =>{
    return (
        <Fragment>
            <HeaderBarAccountDetail />
            <div className="flex justify-center">
                <div className=" w-1200px h-full flex flex-row ">
                    <ChangeBarInformation />
                </div>
            </div>
        </Fragment>
    )
    
};

export default AccountDetail;