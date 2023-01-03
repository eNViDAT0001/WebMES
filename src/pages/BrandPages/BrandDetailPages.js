import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GeneralBrandDetail } from "../../components/Brand/BrandDetail/GeneralBrandDetail/GeneralBrandDetail";
import { ProductInDetailBrand } from "../../components/Brand/BrandDetail/ListProducts/ProductInDetailBrand";

export const BrandDetailPages = () => {
  const {id} = useParams()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className=" w-screen bg-gradient-to-r from-[#29323c] to-[#485563] p-10 ">
      <div className="flex flex-col space-y-9">
        <GeneralBrandDetail />
        <ProductInDetailBrand id={id}/>
      </div>
    </div>
  );
};
