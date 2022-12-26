import React, { useEffect } from "react";
import { GeneralBrandDetail } from "../../components/Brand/BrandDetail/GeneralBrandDetail/GeneralBrandDetail";
import { ProductInDetailBrand } from "../../components/Brand/BrandDetail/ListProducts/ProductInDetailBrand";

export const BrandDetailPages = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className=" w-screen bg-gradient-to-r from-[#29323c] to-[#485563] p-10 ">
      <div className="flex flex-col space-y-9">
        <GeneralBrandDetail />
        <ProductInDetailBrand />
      </div>
    </div>
  );
};
