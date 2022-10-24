import HeaderBar from "../../StoreOtherComponent/HeaderBar";
import ChangeBarInformation from "../GeneralLayout/ChangeBarInformation";
const AddressDetail = () =>{
    return (
        <div>
            <HeaderBar name1="Home . Account . Address" name2=" . Detail"/>
            <div className="flex justify-center">
                <div className=" w-1200px h-full flex flex-row ">
                    <ChangeBarInformation />
                </div>
            </div>
        </div>
    )
    
};

export default AddressDetail;