import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { fetchOneProduct } from "../../store/slices/ProductSlice";
import ProductBasicInformation from '../../components/Product/ProductDetail/ProductBasicInformation'
import DetailInformation from '../../components/Product/ProductDetail/DetailInformation'
import Relatives from "../../components/Product/ProductDetail/Relatives";
import HeaderBar from "../../components/StoreOtherComponent/HeaderBar";

const ProductPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.product);
  useEffect(() => {
    dispatch(fetchOneProduct("6253ef7f5b01a8842718b366"));
  }, []);
  return (
    <Fragment>
      <h1>Id: {id}</h1>
      <div>
        <HeaderBar name1="Home .Products" name2=". Product Name" />
        <div className="flex justify-center font-['Josefin_Sans']">
          <ProductBasicInformation />
        </div>
        <DetailInformation />
        <Relatives />
      </div>
    </Fragment>
  );
};

export default ProductPage;
