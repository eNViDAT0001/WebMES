import LoginImage from "../../../assets/LoginImage.png"
import { RegisterForm } from "../../../components/Auth/RegisterForm";


const RegisterPage = () =>{
    return (
        <div className="flex justify-center mb-[250px]">
        <div className="flex flex-col items-center justify-center   w-[85%] w-max-[200px]">
            <img src={LoginImage} alt="Anh login"  className="mt-32 mb-20"></img>  
            <RegisterForm /> 
        </div>
    </div>
    )
    
};

export default RegisterPage;