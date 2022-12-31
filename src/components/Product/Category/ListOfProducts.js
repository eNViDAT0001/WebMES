import Rating from "react-rating"
import starActive from '../../../assets/star.png'
import starNotActive from '../../../assets/star_not.png'
import {Link} from "react-router-dom";
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FetchProductInHomePage } from "../../../store/slices/ProductSlice";
const ListOfProducts = () => {
    const dispatch = useDispatch()
    const ListProductPreview = useSelector((state)=>state.product.ProductPreview) || []
    useEffect(()=>{
        if(ListProductPreview.length===0){
            dispatch(FetchProductInHomePage())
        }
    },[dispatch,ListProductPreview])
    return(
        <div className='flex flex-col w-full'>
                    {ListProductPreview.map(data =>(
                        <Link to={`/product/${data.ID}`} key={data.ID} className = "flex flex-row justify-start my-4 border-2 hover:shadow-lg p-4">
                            <img src={(data.Media) ? (data.Media[0].mediaPath): "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"} alt="anh san pham" className=' w-[120px] h-[120px] mr-4 '></img>
                            <div className='flex flex-col'>
                                <h1 className='flex justify-start items-start font-normal text-lg text-purple-name-product mb-3'>{data.Name}</h1>
                                <div className= "flex flex-row">
                                    <h1 className='font-normal text-purple-name-product text-sm mr-9px'>${data.Price*(100-data.Discount)/100}</h1>
                                    <h1 className='font-normal text-pink-price-sale text-sm line-through mb-10px mr-4'>${data.Price}</h1>
                                    <Rating 
                                        emptySymbol={<img src={starNotActive} alt="starDisable" className="w-4 h-4 mr-1" />}
                                        fullSymbol={<img src={starActive} alt="star" className="w-4 h-4 mr-1" />}
                                        initialRating = {data.Rating}
                                        readonly = {true}
                                    />
                                </div>
                                <div className='text-left'>
                                    <h1 className=' text-base text-gray-text-product-content'>{data.description}</h1>
                                </div>
                            </div>   
                    </Link>
                    ))}
                </div>
            
                )
}

export default ListOfProducts