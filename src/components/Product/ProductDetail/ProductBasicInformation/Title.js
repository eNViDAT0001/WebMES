
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { checkObjectEmpty } from "../../../../stogare_function/listActions"
import { FetchDetailProduct } from "../../../../store/slices/ProductSlice"
const TitleAndRating = (props) => {
    console.log(props.id)
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.ProductDetail);
    console.log(product)
    useEffect(() => {
        if(checkObjectEmpty(product)){
            dispatch(FetchDetailProduct(props.id))
        }
  }, [dispatch,product,props.id]);
    return(
        <div>
            <h1 className=" font-normal text-4xl text-purple-text-name-product-detail ">{product.Name}</h1>
                <div className="flex flex-row mt-2">

                </div>
        </div>
        
    )
}
export default TitleAndRating