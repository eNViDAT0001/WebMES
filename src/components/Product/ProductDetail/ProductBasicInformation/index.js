import ImageProduct from "./ImageProduct";
import TitleAndType from "./Title_Type_Price";
import HandleQuantityAndCart from "./HandleQuantityAndCart";
import CategoriesAndShare from "./CategoriesAndShare";
const ProductBasicInformation = (props) => {
  return (
    <div className="flex justify-center border p-10 my-10 ">
      <div className="w-full flex flex-row space-x-7">
        <ImageProduct id={props.id} />
        <div className="">
          <TitleAndType id={props.id} />
          <HandleQuantityAndCart id={props.id} />
          <CategoriesAndShare />
        </div>
      </div>
    </div>
  );
};
export default ProductBasicInformation;
