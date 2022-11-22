import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button, FormControlLabel } from "@mui/material";
const BillData = [
  {
    id: 0,
    img: "http://ironstyle.vn/uploads/13.jpg?1528444858025",
    title: "Ut diam consequat",
    Color: "Brown",
    Size: "XL",
    price: 32.0,
  },
  {
    id: 1,
    img: "http://ironstyle.vn/uploads/13.jpg?1528444858025",
    title: "Ut diam consequat",
    Color: "Brown",
    Size: "XL",
    price: 32.0,
  },
  {
    id: 2,
    img: "http://ironstyle.vn/uploads/13.jpg?1528444858025",
    title: "Ut diam consequat",
    Color: "Brown",
    Size: "XL",
    price: 32.0,
  },
];
export const Bill = () => {
  return (
    <div className="w-[40%] font-['Josefin_Sans']">
      <div className="flex flex-row items-center">
        <h1 className=" text-xl mr-4 font-bold"> Discount </h1>
        <TextField
          id="outlined-basic"
          label="Input discount"
          variant="outlined"
          className="h-max-[5px] w-full"
        />
      </div>
      <div className="space-y-6 mt-6 mb-10 ">
        {BillData.map((data) => (
          <div
            key={BillData.id}
            className="flex flex-row h-max-[102]px border-b-2 pr-2 pb-4 "
          >
            <img
              src={data.img}
              className="w-[20%] h-[20%] mr-3"
              alt="anh san pham"
            />
            <div className="p-2 flex justify-between flex-row w-full items-center">
              <div className="flex flex-col">
                <h1 className=" text-sm">{data.title}</h1>
                <h1 className=" text-sm text-[#A1A8C1]">{data.Color}</h1>
                <h1 className=" text-sm text-[#A1A8C1]">{data.Size}</h1>
              </div>
              <h1 className=" text-center text-[#15245E]">
                ${data.price.toFixed(2)}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <div className=" bg-[#F4F4FC] p-6 space-y-10">
        <div className=" border-b-2 border-[#E8E6F1] flex justify-between">
          <h1 className=" text-[#1D3178] text-lg">Subtotal :</h1>
          <h1 className=" text-[#1D3178] text-lg">$219.00</h1>
        </div>
        <div className=" border-b-2 border-[#E8E6F1] flex justify-between">
          <h1 className=" text-[#1D3178] text-lg">Total :</h1>
          <h1 className=" text-[#1D3178] text-lg">$325.00</h1>
        </div>
        <div className=" text-[#8A91AB] items-center">
          <FormControlLabel
            control={<Checkbox size="small" color="success" />}
            label="Shipping & taxes caculated at checkbox"
          />
        </div>
        <Button variant="contained" color="success" className = "w-full">
            Process To Checkout
        </Button>
      </div>
      
    </div>
  );
};
