import React from "react";
import { BannerModel } from "../../models/Banner/Banner";
function Slide(props) {
  const banner = new BannerModel({ ...props.data });

  return (
    <div className="m-auto object-fill" key={banner.id}>
      <img src={banner.image} className="block w-full" alt="..." />
      <div className="flex-col flex justify-center items-start absolute top-1/2 left-[15%] transform -translate-y-1/2 px-3">
        <h1 className="text-black text-2xl font-semibold opacity-50">
          {banner.collection}
        </h1>
        <h1 className="text-black text-3xl font-bold my-2">{banner.title}</h1>
        <button className="rounded-2xl bg-gray-700 hover:bg-gray-900 text-white duration-300 px-4 py-2 m-5 ml-0 mt-3">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Slide;
