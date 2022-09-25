import ImageProduct from "./ImageProduct"
import TitleAndRating from "./TitleAndRating"
import PriceAndType from "./PriceAndType"
import HandleQuantityAndCart from "./HandleQuantityAndCart"
import CategoriesAndShare from "./CategoriesAndShare"
const ProductBasicInformation = () =>{
    return(
       <div className="mt-45px w-1152px h-487px flex flex-row">
            <ImageProduct />
            <div className="ml-11 mt-61px">
                <TitleAndRating />
                <PriceAndType />
                <HandleQuantityAndCart />
                <CategoriesAndShare />
            </div>
       </div>
    )
}
export default ProductBasicInformation