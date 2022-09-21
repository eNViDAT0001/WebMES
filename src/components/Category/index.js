import HeaderBar from "./HeaderBar"
import OptionBar from "./OptionBar"
import ProductBrand from "./ProductBrand"
import RatingItem from "./RatingItems"
import ListOfProducts from "./ListOfProducts"


const Category = () => {
    return(
    <div className=" flex-auto" >
        <HeaderBar />
        <OptionBar />
        <div className="flex justify-center ">
                <div className="flex flex-row justify-around mt-100px w-1171px">
                    <div className="flex flex-col">
                    <ProductBrand />
                    <RatingItem />
                </div>
                <ListOfProducts />
            </div>
        </div>
    </div>)
}

export default Category