import * as React from "react";
import { GeneralBrand } from "./GeneralBrand/GeneralBrand";
import { ListBrand } from "./ListBrand/ListBrand";

export const BrandManagement = () => {
  return (
    <div className="flex flex-col space-y-9">
      <GeneralBrand />
      <ListBrand />
    </div>
  );
};
