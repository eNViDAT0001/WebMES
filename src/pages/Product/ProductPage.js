import { useParams } from "react-router-dom";

import ProductBasicInformation from "../../components/Product/ProductDetail/ProductBasicInformation";
import DetailInformation from "../../components/Product/ProductDetail/DetailInformation";
import Relatives from "../../components/Product/ProductDetail/Relatives";
import HeaderBar from "../../components/StoreOtherComponent/HeaderBar";

const ProductPage = () => {
  let { id } = useParams();

  return (
      <div>
        <HeaderBar name1="Home .Products" name2=". Product Name" />
        <div className="flex justify-center font-['Josefin_Sans']">
          <ProductBasicInformation id={id} />
        </div>
        <DetailInformation id={id} />
        <Relatives id={id} />
      </div>
  );
};

export default ProductPage;
