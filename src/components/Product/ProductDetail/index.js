import HeaderBarProductDetail from "./HeaderBarProductDetail"
import ProductBasicInformation from "./ProductBasicInformation"
import DetailInformation from "./DetailInformation"
import Relatives from "./Relatives"
const ProductDetail = () => {
    return(
        <div>
            <HeaderBarProductDetail />
            <div className="flex justify-center font-['Josefin_Sans']">
                <ProductBasicInformation />{/*both image, price, something and easily understand */}
            </div>
            <DetailInformation />
            <Relatives />
        </div>
        
    )
}

export default ProductDetail