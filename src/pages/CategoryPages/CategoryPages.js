
import {productBandCheckBox, ratingItem,product} from '../../dummy_database/Category'
import HeaderBar from '../../components/Category/HeaderBar'
import OptionBar from '../../components/Category/OptionBar'
import ProductBrand from '../../components/Category/ProductBrand' //include option anh label
import RatingItem from '../../components/Category/RatingItems'
import ListOfProducts from '../../components/Category/ListOfProducts'





const CategoryPage = () =>{
    return (
    <div className=" flex-auto" >
            <HeaderBar />
            <OptionBar />
        <div className="flex justify-center ">
            <div className="flex flex-row justify-around mt-100px w-1171px">
                <ProductBrand />
                <RatingItem />
                <ListOfProducts />
            </div>
        </div>
    </div>)  
};

export default CategoryPage;