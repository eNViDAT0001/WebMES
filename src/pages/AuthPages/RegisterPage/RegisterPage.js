import { RegisterForm } from "../../../components/Auth/RegisterForm";

const RegisterPage = () =>{
    return (
        <div className="flex justify-center items-center mb-[250px] mt-[150px]">
            <div className="flex flex-col items-center justify-center w-[65%] w-max-[200px]">
                <RegisterForm />
            </div>
        </div>
    )
    
};

export default RegisterPage;