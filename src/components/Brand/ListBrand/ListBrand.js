import React, { useState } from "react";
import ListIcon from "@mui/icons-material/List";
import { Button, Divider } from "@mui/material";
import { FormAddBrand } from "./FormAddBrand";
import { ListViewBrand } from "./ListViewBrand";
const DataBrand = [
  {
    id: 0,
    name: "Nguyễn Văn Đạt",
    createAt: "2012-12-16",
  },
  {
    id: 1,
    name: "Brand A",
    createAt: "2012-12-16",
  },
  {
    id: 2,
    name: "Brand B",
    createAt: "2012-12-16",
  },
];
export const ListBrand = () => {
  const [openBrand, setOpenAddBrand] = useState(false);
  const handleButtonAdd = (e) => {
    if (!openBrand) setOpenAddBrand(true);
    else setOpenAddBrand(false);
  };
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <div className="w-[80%] min-h-[200px] bg-white shadow-lg rounded-2xl p-5 font-[Inter]">
          <div className="flex flex-row justify-between  pr-4">
            <div className="flex flex-row items-center space-x-2">
              <ListIcon sx={{ width: 20, height: 20 }} />
              <h1 class="font-bold text-2xl ">List Brand</h1>{" "}
            </div>
            {!openBrand ? (
              <Button variant="contained" onClick={handleButtonAdd}>
                + Add new Brand
              </Button>
            ) : (
              <Button variant="outlined" onClick={handleButtonAdd}>
                Hide Form
              </Button>
            )}
          </div>
          {openBrand ? <FormAddBrand /> : <div></div>}
          <div className="my-10">
            <Divider />
          </div>
          <ListViewBrand />
        </div>
      </div>
    </div>
  );
};
