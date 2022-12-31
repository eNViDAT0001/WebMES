import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";


import ProductBasicInformation from '../../components/Product/ProductDetail/ProductBasicInformation'
import DetailInformation from '../../components/Product/ProductDetail/DetailInformation'
import Relatives from "../../components/Product/ProductDetail/Relatives";
import HeaderBar from "../../components/StoreOtherComponent/HeaderBar";
import { useDispatch, useSelector } from "react-redux";
import { checkObjectEmpty } from "../../stogare_function/listActions";

const ProductPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch()
  const dataDetail = useSelector((state)=>state.product.ProductDetail) || {}
  useEffect(()=>{
    if(checkObjectEmpty(dataDetail)){
      dispatch()
    }
  },[dispatch])
  return (
    <Fragment>
      <div>
        <HeaderBar name1="Home .Products" name2=". Product Name" />
        <div className="flex justify-center font-['Josefin_Sans']">
          <ProductBasicInformation id={id}/>
        </div>
        <DetailInformation id={id}/>
        <Relatives id={id}/>
      </div>
    </Fragment>
  );
};

export default ProductPage;
