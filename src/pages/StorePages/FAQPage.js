import GeneralInformation from "../../components/StoreOtherComponent/FAQ/GeneralInformation";
import AskQuestion from "../../components/StoreOtherComponent/FAQ/AskQuestion";
import FAQHeaderBar from "../../components/StoreOtherComponent/FAQ/FAQHeaderBar";
import listLogo from '../../components/StoreOtherComponent/OrderCompleted/asset/listLogo.png'

const FAQPage = () =>{
    return (
        <div className="font-['Josefin_Sans']">
            <FAQHeaderBar />
            <div className="flex items-center flex-col">
                <div className="w-[80%] min-h-[100px] h-[80%] max-h-[740px] mt-[130px] flex flex-row justify-between">
                    <GeneralInformation />
                    <AskQuestion />
                </div>
                <img className='w-[80%] h-[121px] my-[91px]' src={listLogo} alt= "anh logo"></img>
            </div>
            
        </div>
    )
    
};

export default FAQPage;