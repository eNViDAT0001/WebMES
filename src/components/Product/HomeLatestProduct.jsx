import React from "react";
import { HOME_PRODUCT } from "../../dummy_database/ProductDummyDatabase";
import ProductSlider from "../Slider/ProductSlider";
const Product = (props) => {
  return (
    <div className="bg-gray-700 hover:bg-red-700">
      <h1>32423</h1>
    </div>
  );
};
function HomeLatestProduct() {
  return (
    <div className="md:flex flex-col items-center">
      <ProductSlider/>

      <div>s s s s s</div>
    </div>
  );
}

export default HomeLatestProduct;
