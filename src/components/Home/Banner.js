import { useEffect, useState } from "react";

import { AiOutlineVerticalLeft, AiOutlineVerticalRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllProductBanner } from "../../store/slices/ProductSlice";

const Banner = () => {
  const dispatch = useDispatch();
  const DataBanner = useSelector((state) => state.product.ProductBanner) || [];
  const [banner, setBanner] = useState();
  console.log(banner)
  useEffect(()=>{
    if(!banner){
        setBanner(DataBanner[0])
    }
  })
  useEffect(() => {
    if (DataBanner.length === 0) {
      dispatch(FetchAllProductBanner());
    }
  }, [dispatch, DataBanner,banner]);
  const onPrevClickHandler = () => {
    const index = DataBanner.indexOf(banner);
    if ((index === 0) || (banner===undefined)) {
      setBanner(DataBanner[DataBanner.length - 1]);
    } else setBanner(DataBanner[index - 1]);
  };

  const onNextClickHandler = () => {
    const index = DataBanner.indexOf(banner);
    if (index === DataBanner.length - 1) {
      setBanner(DataBanner[0]);
    } else setBanner(DataBanner[index + 1]);
  };
  return (
    <div>
      {banner !== undefined ? (
        <div className="flex justify-center items-center px-[15%] border hover:shadow-md">
          <div className="w-full h-[600px] hover:cursor-pointer">
            <img
              src={banner.Image}
              alt="Anh banner"
              className="w-full h-full skew-y-3 md:transform-none"
            ></img>
          </div>
          <div className="w-full h-auto flex items-center justify-between absolute  px-5 ">
            <button onClick={onPrevClickHandler}>
              <AiOutlineVerticalRight
                size={30}
                className="bg-black text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition"
              />
            </button>
            <button onClick={onNextClickHandler}>
              <AiOutlineVerticalLeft
                size={30}
                className="bg-black text-white rounded-full bg-opacity-50 hover:bg-opacity-100 transition"
              />
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Banner;
