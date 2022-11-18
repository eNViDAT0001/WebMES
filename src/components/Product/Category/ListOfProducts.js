import Rating from "react-rating"
import starActive from '../../../assets/star.png'
import starNotActive from '../../../assets/star_not.png'
import {Link} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllProduct } from "../../../store/slices/CategorySlice";
const ListOfProducts = () => {
    const dispatch = useDispatch()
    const getInitalStateCategory = useSelector((state)=> state.category)
    useEffect(() => {
        dispatch(fetchAllProduct())
      },[])
    const categoryProduct = getInitalStateCategory.product
    return(
        <div className='flex flex-col '>
                    {categoryProduct.map(data =>(
                        <Link to={`/product/${data.id}`} key={data.id} className = "flex flex-row justify-start w-921px h-230px my-4 border-2 hover:shadow-lg">
                            <img src={data.media} alt="anh san pham" className='my-4 ml-4 mr-7'></img>
                            <div className='flex flex-col mt-46px'>
                                <h1 className='flex justify-start font-normal text-lg text-purple-name-product mb-3'>{data.name}</h1>
                                <div className= "flex flex-row">
                                    <h1 className='font-normal text-purple-name-product text-sm mr-9px'>${data.getDiscountPrice()}</h1>
                                    <h1 className='font-normal text-pink-price-sale text-sm line-through mb-10px mr-4'>${data.price}</h1>
                                    <Rating 
                                        emptySymbol={<img src={starNotActive} alt="starDisable" className="w-4 h-4 mr-1" />}
                                        fullSymbol={<img src={starActive} alt="star" className="w-4 h-4 mr-1" />}
                                        initialRating = {data.rating}
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