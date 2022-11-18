import HeaderBar from "../../components/StoreOtherComponent/HeaderBar"
import OptionBar from "../../components/Product/Category/OptionBar"
import ProductBrand from "../../components/Product/Category/ProductBrand"
import RatingItem from "../../components/Product/Category/RatingItems"
import ListOfProducts from "../../components/Product/Category/ListOfProducts"



const CategoryPage = () =>{
        return(
            <div>
                <HeaderBar name1="Home .Products" name2= ". Ecommerce Acceories & Fashion item"/>
                <OptionBar />
                <div className="flex justify-center font-['Josefin_Sans'] ">
                        <div className="flex flex-row justify-around mt-100px w-1171px">
                            <div className="flex flex-col">
                            <ProductBrand />
                            <RatingItem />
                        </div>
                        <ListOfProducts />
                    </div>
                </div>
            </div>)
};

export default CategoryPage;

