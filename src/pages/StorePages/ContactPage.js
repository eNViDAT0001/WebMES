import ContactHeaderBar from "../../components/StoreOtherComponent/Contact/ContactHeaderBar";
import contact from '../../components/StoreOtherComponent/Contact/asset/contact.svg'
import imgContact from '../../components/StoreOtherComponent/Contact/asset/imgContact.svg'
import FormContact from "../../components/StoreOtherComponent/Contact/FormContact";
const ContactPage = () =>{
    return (
        <div className="flex flex-col font-['Josefin_Sans']">
            <ContactHeaderBar />
            <div className="flex justify-center mt-[120px]">
                <div className="w-[65%] flex justify-center flex-col">
                    <img src={contact} alt="thong tin contact" ></img>
                    <div className="flex flex-row justify-between">
                        <FormContact />
                        <img src={imgContact} alt="anh minh hoa" className=" w-[65%] h-[65%] mr-[-15%] mt-[-15%]"></img>
                    </div>
                    
                </div>
            </div>
            
        </div>
       
    )
    
};

export default ContactPage;