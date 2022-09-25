import { useEffect, useRef, useState } from "react";
import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import { DEFAULT_IMGAGE } from "../../dummy_database/DefaultDummyDatabase";
import { HOME_PRODUCT } from "../../dummy_database/ProductDummyDatabase";
import ProductSlide from "./ProductSlide";

let sliderInterval;
const ProductSlider = (props) => {
  const products = HOME_PRODUCT;
  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };
  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    // slideRef.current.addEventListener("mouseenter", pauseSlider);
    // slideRef.current.addEventListener("mouseleave", startSlider);
    // startSlider();
  });

  // const startSlider = () => {
  //   sliderInterval = setInterval(onNextClickHandler, 3000);
  // };
  // const pauseSlider = () => {
  //   clearInterval(sliderInterval);
  // };
  const [curIndex, setCurIndex] = useState(0);
  const getSlides = () => products.slice(curIndex*5,(curIndex+1)*5)
  const onPrevClickHandler = () => {
    let prev = (curIndex + 1) % products.length;
    setCurIndex(prev);
    slideRef.current.classList.add("fade-anim");
  };
  const onNextClickHandler = () => {
    let next = (curIndex + products.length - 1) % products.length;
    setCurIndex(next);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <div className="flex justify-center ">
      <div ref={slideRef} className="w-[1000px] relative ">
        <div className="w-full object-fill">
            <ProductSlide data={getSlides()}/>
        </div>
        <div className="w-full flex absolute top-1/2 transform -translate-y-1/2 py-2 px-3 justify-between">
          <button onClick={onPrevClickHandler}><AiOutlineVerticalRight size={30} className="bg-black text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition"/></button>
          <button onClick={onNextClickHandler}><AiOutlineVerticalLeft size={30} className="bg-black text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition"/></button>
        </div>
        
      </div>
    </div>
  );
};

export default ProductSlider;
