import React from "react";
const Product = (props) => {
    // const image = p.media[0].src;
    // const name = p.name;
    // const price = p.getDiscountPrice();
  return (
    <div>
      <div></div>
      <div>name</div>
      <div>rating</div>
      <div>price</div>
    </div>
  );
};
function ProductSlide(props) {
  const products = props.data;
  return (
    <div className="m-auto object-fill">
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 text-center pt-2 text-gray-400 pb-8">
        {products.map((item) => (
          <Product />
        ))}
      </div>
    </div>
  );
}

export default ProductSlide;
