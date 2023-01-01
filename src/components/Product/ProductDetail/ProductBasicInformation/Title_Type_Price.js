import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { checkObjectEmpty, currencyFormat } from "../../../../stogare_function/listActions";
import {
  FetchDetailProduct,
  FetchSpecificationFromOneProduct,
} from "../../../../store/slices/ProductSlice";
import { fetchAllComment } from "../../../../store/slices/CommentSlice";
import { Divider } from "@mui/material";
const TitleAndType = (props) => {
  const dispatch = useDispatch();
  const [priceOption, setPriceOption] = useState(0);
  const [quantity, setQuantity] = useState();
  const product = useSelector((state) => state.product.ProductDetail);
  const comment = useSelector((state) => state.comment.comment);
  const specifications =
    useSelector((state) => state.product.Specification) || [];
  useEffect(() => {
    if (checkObjectEmpty(product)) {
      dispatch(FetchDetailProduct(props.id));
    }
  }, [dispatch, product, props.id]);
  useEffect(() => {
    if (checkObjectEmpty(comment)) {
      dispatch(fetchAllComment(props.id));
    }
  }, [dispatch, comment, props.id]);
  useEffect(() => {
    if (specifications.length === 0) {
      dispatch(FetchSpecificationFromOneProduct(props.id));
    }
  }, [dispatch, specifications, props.id]);
  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-3xl text-[#0D134E] font-bold ">
        {product.Name}
      </h1>
      <div className="flex flex-row space-x-3">
        <div className=" flex flex-row space-x-2 items-center">
          <h1 className=" underline">
            {!checkObjectEmpty(comment) ? comment.data.data.length : 0}
          </h1>
          <h1 className=" text-[#767676] hover:underline hover:cursor-pointer">
            Reviewed
          </h1>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-3">
        <div className="py-5 pl-5 flex flex-row space-x-1 font-[Helvetica] text-[#929292] items-center line-through">
          <h1 className=" text-xs">đ</h1>
          <h1 className=" text-base ">{currencyFormat(parseInt(product.Price))}</h1>
        </div>
        <div className="py-5 flex flex-row space-x-1 font-[Helvetica] text-[#EE4D2D]">
          <h1 className=" text-xl">đ</h1>
          <h1 className=" text-2xl">
            {currencyFormat((product.Price * (100 - product.Discount)) / 100)}
          </h1>
        </div>
        <div className=" px-2 bg-[#EE4D2D] flex flex-row space-x-1 font-[Helvetica] text-[#FFFFFF] items-center ">
          <h1 className=" text-sm ">- {product.Discount}%</h1>
        </div>
      </div>
      <div>
        {specifications.length === 0 ? (
          <div></div>
        ) : (
          <div className="space-y-4 font-[Helvetica]">
            {specifications.map((data) => (
              <div className="space-y-4">
                <div className="flex flex-row space-x-4 whitespace-nowrap items-start">
                  <h1 className="text-[#929292] text-lg ">
                    {data.Properties}:{" "}
                  </h1>
                  {data.Options.length === 0 ? (
                    <div></div>
                  ) : (
                    <div className="flex flex-row flex-wrap items-center">
                      {data.Options.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => {
                            setPriceOption(option.price);
                            setQuantity(option.quantity);
                          }}
                          className="border py-1 px-6 m-1 hover:text-[#EE4D2D] hover:border-[#EE4D2D] hover:cursor-pointer"
                        >
                          <h1>{option.name}</h1>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Divider />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
export default TitleAndType;
