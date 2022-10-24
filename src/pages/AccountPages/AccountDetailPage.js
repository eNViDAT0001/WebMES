
import ChangeBarInformation from "../../components/Account/GeneralLayout/ChangeBarInformation";
import AccountDetail from "../../components/Account/AccountDetail/AccountDetail";
import HeaderBar from "../../components/StoreOtherComponent/HeaderBar";
const AccountDetailPage = () =>{
        return (
            <div className="font-['Josefin_Sans']">
                <div className="flex flex-col w-full">
                    <HeaderBar name1="Home .Account" name2=" . Detail"/>
                    <div className="flex justify-center">
                        <div className=" w-[85%] h-full flex flex-row ">
                            <ChangeBarInformation />
                            <AccountDetail />
                        </div>
                    </div>
                </div>
            </div>
        )  
};

export default AccountDetailPage;