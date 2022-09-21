import HeaderBarProductDetail from "./HeaderBarProductDetail"
import ProductBasicInformation from "./ProductBasicInformation"
import DetailInformation from "./DetailInformation"
const ProductDetail = () => {
    return(
        <div>
            <HeaderBarProductDetail />
            <div className="flex justify-center">
                <ProductBasicInformation />{/*both image, price, something and easily understand */}
            </div>
            <DetailInformation />
            
        </div>
        
    )
}

export default ProductDetail