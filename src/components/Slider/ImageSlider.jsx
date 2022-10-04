import { useEffect, useRef, useState } from "react";
import { AiOutlineVerticalLeft, AiCOutlineVerticalRight } from "react-icons/ai";
import { BANNER_DUMMY } from "../../dummy_database/BannerDummyDatabase";
import { DEFAULT_IMGAGE } from "../../dummy_database/DefaultDummyDatabase";
import Slide from "./Slide";
let sliderInterval;
const ImageSlider = (props) => {
  const slides = BANNER_DUMMY;
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
  const [curSlide, setCurSlide] = useState(0);
  const getSlide = () => slides[curSlide];
  const onPrevClickHandler = () => {
    let prev = (curSlide + 1) % slides.length;
    setCurSlide(prev);
    slideRef.current.classList.add("fade-anim");
  };
  const onNextClickHandler = () => {
    let next = (curSlide + slides.length - 1) % slides.length;
    setCurSlide(next);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div className="flex justify-center ">
      <div ref={slideRef} className="w-auto relative ">
        <div className="w-full object-fill">
            <Slide data={getSlide()}/>
        </div>
        <div className="w-full flex absolute top-1/2 transform -translate-y-1/2 py-2 px-3 justify-between">
          <button onClick={onPrevClickHandler}><AiOutlineVerticalRight size={30} className="bg-black text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition"/></button>
          <button onClick={onNextClickHandler}><AiOutlineVerticalLeft size={30} className="bg-black text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition"/></button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
