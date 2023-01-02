import HeaderBar from "../../components/StoreOtherComponent/HeaderBar";
import OptionBar from "../../components/Product/Category/OptionBar";
import ProductBrand from "../../components/Product/Category/ProductBrand";
import RatingItem from "../../components/Product/Category/RatingItems";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchProductInCategory } from "../../store/slices/ProductSlice";
import ListOfProducts from "../../components/Product/Category/ListOfProducts";

const CategoryPage = () => {
  const dispatch = useDispatch()
  const ListProducts = useSelector(state=>state.product.ProductPreviewInCategory) || []
  console.log(ListProducts)
  useEffect(() => {
    if (ListProducts.length === 0) {
      dispatch(FetchProductInCategory());
    }
  }, [dispatch, ListProducts]);
  return (
    <div>
      <HeaderBar
        name1="Home .Products"
        name2=". Ecommerce Acceories & Fashion item"
      />
      <OptionBar />
      <div className="flex justify-center font-['Josefin_Sans'] ">
        <div className="w-[78%]">
          <div className="flex flex-row justify-start my-[100px] space-x-10 w-full">
            <div className="flex flex-col">
              <ProductBrand />
              <RatingItem />
            </div>
            <ListOfProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
