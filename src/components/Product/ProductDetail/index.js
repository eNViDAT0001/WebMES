import HeaderBar from "../../StoreOtherComponent/HeaderBar"
import ProductBasicInformation from "./ProductBasicInformation"
import DetailInformation from "./DetailInformation"
import Relatives from "./Relatives"
const ProductDetail = () => {
    return(
        <div>
            <HeaderBar name1="Home .Products" name2=". Product Name"/>
            <div className="flex justify-center font-['Josefin_Sans']">
                <ProductBasicInformation />{/*both image, price, something and easily understand */}
            </div>
            <DetailInformation />
            <Relatives />
        </div>
        
    )
}

export default ProductDetail