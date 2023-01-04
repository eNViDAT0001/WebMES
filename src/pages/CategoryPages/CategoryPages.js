import HeaderBar from "../../components/StoreOtherComponent/HeaderBar";
import OptionBar from "../../components/Product/Category/OptionBar";
import ProductBrand from "../../components/Product/Category/ProductBrand";
import RatingItem from "../../components/Product/Category/RatingItems";
import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect, useState } from "react";
import {
  FetchProductFromSelectCategory,
  FetchProductInCategory,
} from "../../store/slices/ProductSlice";
import ListOfProducts from "../../components/Product/Category/ListOfProducts";
import { useParams } from "react-router-dom";
import { checkObjectEmpty } from "../../stogare_function/listActions";

const CategoryPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectorData= useSelector((state) => state.product.CategoryHandle)
  const ListProducts = useSelector(
    (state) => state.product.ProductPreviewInCategory
  );

    

  useEffect(() => {
    if (id == 0) {
       dispatch(FetchProductInCategory());
    } else {
      dispatch(FetchProductFromSelectCategory(id));
    }
  }, [dispatch, id]);

  useEffect(()=>()=>{
    localStorage.removeItem("CategorySave")
    localStorage.setItem("CategorySave",JSON.stringify(selectorData))
  },[])

  return (
    <div>
      <HeaderBar
        name1="Home .Products ."
        name2= 
        {checkObjectEmpty(selectorData)
          ? "All"
          : `${selectorData.Name}`}
        
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
