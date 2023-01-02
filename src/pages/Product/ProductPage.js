import { useParams } from "react-router-dom";

import ProductBasicInformation from "../../components/Product/ProductDetail/ProductBasicInformation";
import DetailInformation from "../../components/Product/ProductDetail/DetailInformation";
import Relatives from "../../components/Product/ProductDetail/Relatives";
import HeaderBar from "../../components/StoreOtherComponent/HeaderBar";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  resetProduct } from "../../store/slices/ProductSlice";
import { resetComment } from "../../store/slices/CommentSlice";

const ProductPage = () => {
  const dispatch = useDispatch()
  let { id } = useParams();
  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])
  useEffect(()=>()=>{
    dispatch(resetProduct())
    dispatch(resetComment())
  },[dispatch])
  return (
    <div>
      <HeaderBar name1="Home .Products" name2=". Product Name" />
      <div className="bg-[#F5F8FE] border">
        <div className="flex justify-center font-['Josefin_Sans'] ">
          <ProductBasicInformation id={id} />
        </div>
        <DetailInformation id={id} />
      </div>

      <Relatives id={id} />
    </div>
  );
};

export default ProductPage;
