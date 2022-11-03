import { LoginForm } from "../../../components/Auth/LoginForm";
import LoginImage from "../../../assets/LoginImage.png"

const LoginPage = () =>{
    return (
        <div className="flex justify-center mb-[250px]">
            <div className="flex flex-col items-center justify-center   w-[65%] w-max-[200px]">
                <img src={LoginImage} alt="Anh login"  className="mt-32 mb-20"></img>
                <LoginForm></LoginForm>
            </div>
        </div>
    )
    
};

export default LoginPage;