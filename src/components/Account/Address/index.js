import { Fragment } from "react";
import HeaderBarAddress from "../GeneralLayout/HeaderBarAddress";
import ChangeBarInformation from "../GeneralLayout/ChangeBarInformation";
import AddressPiece from "./AddressPiece";
const Address = () =>{
    return (
        <Fragment>
            <HeaderBarAddress />
            <div className="flex justify-center">
                <div className=" w-1200px h-full flex flex-row ">
                    <ChangeBarInformation />
                </div>
            </div>
        </Fragment>
    )
    
};

export default Address;