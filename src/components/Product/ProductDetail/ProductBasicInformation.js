import Rating from "react-rating"
import starActive from '../../../assets/star.png'
import starNotActive from '../../../assets/star_not.png'


const ProductBasicInformation = () =>{
    return(
        <div className="mt-45px w-1152px h-487px border flex flex-row">
            <div className="w-547px h-full border">
            
            </div>
            <div className="ml-11 mt-61px">
                <h1 className=" font-normal text-4xl text-purple-text-name-product-detail ">Playwood arm chair</h1>
                <div className="flex flex-row mt-2">
                    <Rating  
                        emptySymbol={<img src={starNotActive} alt="starDisable" className="w-3 h-3 mr-1" />}
                        fullSymbol={<img src={starActive} alt="star" className="w-3 h-3 mr-1" />}
                        initialRating = {4}
                        readonly = {true}/>
                    <h1 className="text-purple-text capitalize text-sm "> (22) </h1> 
                </div>
                <div className="flex flex-row mt-14px text-base">
                    <h1 className="mr-18px text-purple-text ">$32.00</h1>
                    <h1 className=" text-pink-price-sale line-through">$32.00</h1>
                </div>
                <h1 className="mt-3 text-base text-purple-type-product-detail">Type</h1>

                 
            </div>
            
            
            
        </div>
    )
}
export default ProductBasicInformation