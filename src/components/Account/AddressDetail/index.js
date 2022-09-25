
import { Fragment } from "react";
import HeaderBarAddressDetail from "../GeneralLayout/HeaderBarAddressDetail";
import ChangeBarInformation from "../GeneralLayout/ChangeBarInformation";
const AddressDetail = () =>{
    return (
        <Fragment>
            <HeaderBarAddressDetail />
            <div className="flex justify-center">
                <div className=" w-1200px h-full flex flex-row ">
                    <ChangeBarInformation />
                </div>
            </div>
        </Fragment>
    )
    
};

export default AddressDetail;