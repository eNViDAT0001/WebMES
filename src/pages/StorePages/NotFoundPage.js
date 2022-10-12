import NotFoundHeaderBar from "../../components/StoreOtherComponent/NotFound/NotFoundHeaderBar";
import svgNotFound from "../../components/StoreOtherComponent/NotFound/asset/svgNotFound.svg";
import svgTextNotFound from "../../components/StoreOtherComponent/NotFound/asset/svgTextNotFound.svg";

const NotFoundPage = () =>{
    return(
        <div className="font-['Josefin_Sans']">
            <NotFoundHeaderBar />
            <div className='flex justify-center'>
                <div className='w-[45%]  flex items-center flex-col'>
                    <img src = {svgNotFound} alt="anh not found" ></img>
                    <img src = {svgTextNotFound} alt="thong bao not found"></img>
                    <button className="w-[35%] h-[50px] mt-20 mb-20 bg-[#FF1788] text-white"> Back to Home </button>
                </div>    
            </div>
        </div>
    )
}

export default NotFoundPage;