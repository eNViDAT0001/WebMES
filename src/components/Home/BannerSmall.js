import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchAllCategoryRoof } from "../../store/slices/ProductSlice";

const BannerSmall = () => {
  const dispatch = useDispatch();
  const DataCategories =
    useSelector((state) => state.product.CategoryRoof) || [];
  useEffect(() => {
    if (DataCategories.length === 0) {
      dispatch(FetchAllCategoryRoof());
    }
  }, [dispatch, DataCategories]);
  return (
    <div>
      {DataCategories.length === 0 ? (
        <div></div>
      ) : (
        <div className="flex justify-center mt-20 ">
          <div className="w-[80%] flex flex-col border p-10  space-y-6 bg-gradient-to-b from-[#FFFFFF] to-[#FFFFFF] rounded-2xl">
            <h1 className=" text-xl font-['Poppins_Bold'] font-extrabold uppercase text-[#000000]">
              can interest you
            </h1>
            <div className="flex flex-row justify-between">
              {DataCategories.map((data) => (
                <div
                  key={data.ID}
                  className="hover:shadow-xl hover:cursor-pointer border w-[325px] flex flex-row justify-between bg-white"
                >
                  <img
                    src={data.ImagePath}
                    alt="anh banner nho"
                    className="w-[200px] h-[300px]"
                  />
                  <h1 className="mt-6 mr-8 font-[Cursive] font-bold text-xl">
                    {data.Name}
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerSmall;
