import ImageProduct from "./ImageProduct"
import TitleAndRating from "./Title"
import PriceAndType from "./Price"
import HandleQuantityAndCart from "./HandleQuantityAndCart"
import CategoriesAndShare from "./CategoriesAndShare"
const ProductBasicInformation = (props) =>{
    return(
       <div className="mt-45px w-1152px h-487px flex flex-row">
            <ImageProduct id={props.id}/>
            <div className="ml-11 mt-61px">
                <TitleAndRating id={props.id}/>
                <PriceAndType id={props.id}/>
                <HandleQuantityAndCart id={props.id}/>
                <CategoriesAndShare />
            </div>
       </div>
    )
}
export default ProductBasicInformation