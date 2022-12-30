import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bannerSmall1 from "../../assets/bannerSmall1.webp";
import bannerSmall2 from "../../assets/bannerSmall2.webp";
import bannerSmall3 from "../../assets/bannerSmall3.webp";
import { FetchAllCategory } from "../../store/slices/ProductSlice";

const BannerSmall = () => {
  const dispatch = useDispatch();
  const DataCategories = useSelector((state) => state.product.Category);
  useEffect(() => {
    if (DataCategories.length === 0) {
      dispatch(FetchAllCategory());
    }
  }, [dispatch, DataCategories]);
  return (
    <div>
      <div className="flex justify-center mt-20">
        <div className="w-[80%] flex flex-col  ">
          <h1 className=" text-4xl font-['Poppins_Bold'] font-extrabold my-10 uppercase text-[#5EBEC4]">
            can interest you          
          </h1>
          <div className="flex flex-row justify-between">
            {DataCategories.map((data) => (
              <div
                key={data.ID}
                className="hover:shadow-xl hover:cursor-pointer border w-[375px] flex flex-row justify-between bg-white"
              >
                <img
                  src={data.ImagePath}
                  alt="anh banner nho"
                  className="w-[200px] h-[300px]"
                />
                <h1 className="mt-6 mr-8 font-[Cursive] font-bold text-2xl">
                  {data.Name}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSmall;
