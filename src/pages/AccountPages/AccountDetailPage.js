
import CustomerInformation from "../../components/Account/AccountDetail/CustomerInformation"
import HeaderBarAccountDetail from "../../components/Account/GeneralLayout/HeaderBarAccountOrder";
import ChangeBarInformation from "../../components/Account/GeneralLayout/ChangeBarInformation";
import PhoneAndEmail from "../../components/Account/AccountDetail/PhoneAndEmail";
import AccountDetail from "../../components/Account/AccountDetail/AccountDetail";
const AccountDetailPage = () =>{
        return (
            <div className="font-['Josefin_Sans']">
                <div className="flex flex-col w-full">
                    <HeaderBarAccountDetail />
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