import React from "react";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Button, Divider, FormControlLabel } from "@mui/material";
import { currencyFormat } from "../../stogare_function/listActions";
import { useNavigate } from "react-router-dom";

export const Bill = () => {
  const bill = JSON.parse(localStorage.getItem("SaveCart"));
  const navigate = useNavigate()

  return (
    <div className="w-[40%] font-['Josefin_Sans']">
      <div className="flex flex-row items-center">
        <h1 className=" text-xl mr-4 font-bold"> Discount </h1>
      </div>
      <div className="space-y-6 mt-6 mb-10 ">
        {bill.Items.map((data) => (
          <div
            id={data.id}
            className="flex flex-row h-max-[102]px p-2 pb-4 border hover:scale-105 hover:cursor-pointer"
          >
            <img
              src={data.media_path}
              className="w-[20%] h-[20%] mr-3"
              alt="anh san pham"
            />
            <div className="p-2 flex justify-between flex-row w-full items-center">
              <div className="flex flex-col">
                <h1 className=" text-sm">{data.name}</h1>
                <h1 className=" text-sm text-[#A1A8C1]">{data.option_name}</h1>
              </div>
              <div className="flex flex-col items-end">
                <h1 className=" text-center text-[#15245E]">
                  Quantity: {data.quantity}
                </h1>
                <h1 className=" text-center text-[#15245E]">
                  Total:{" "}
                  {currencyFormat(
                    (data.price * data.quantity * (100 - data.discount)) / 100
                  )}
                  đ
                </h1>
              </div>
            </div>
          </div>
        ))}
        <Divider />
      </div>
      <div className=" bg-[#F4F4FC] p-6 space-y-10">
        <div className=" border-b-2 border-[#E8E6F1] flex justify-between">
          <h1 className=" text-[#1D3178] text-lg">Subtotal :</h1>
          <h1 className=" text-[#1D3178] text-lg">0đ</h1>
        </div>
        <div className=" border-b-2 border-[#E8E6F1] flex justify-between">
          <h1 className=" text-[#1D3178] text-lg">Total :</h1>
          <h1 className=" text-[#1D3178] text-lg">{currencyFormat(parseInt(localStorage.getItem("TotalPrice")))}đ</h1>
        </div>
        <div className=" text-[#8A91AB] items-center">
          <FormControlLabel
            control={<Checkbox size="small" color="success" />}
            label="Shipping & taxes caculated at checkbox"
          />
        </div>
        <Button variant="contained" color="success" className="w-full">
          Process To Checkout
        </Button>
      </div>
    </div>
  );
};
