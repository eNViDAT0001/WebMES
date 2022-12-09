import Rating from "react-rating"
import starActive from '../../../../assets/star.png'
import starNotActive from '../../../../assets/star_not.png'
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchAllProduct } from "../../../../store/slices/ProductSlice"
const TitleAndRating = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.ProductDetail);
    useEffect(() => {
    dispatch(fetchAllProduct("6253ef7f5b01a8842718b366"));
  }, []);
    return(
        <div>
            <h1 className=" font-normal text-4xl text-purple-text-name-product-detail ">{product.nameProduct}</h1>
                <div className="flex flex-row mt-2">
                    <Rating  
                        emptySymbol={<img src={starNotActive} alt="starDisable" className="w-3 h-3 mr-1" />}
                        fullSymbol={<img src={starActive} alt="star" className="w-3 h-3 mr-1" />}
                        initialRating = {4}
                        readonly = {true}/>
                    <h1 className="text-purple-text capitalize text-sm "> (22) </h1> 
                </div>
        </div>
        
    )
}
export default TitleAndRating