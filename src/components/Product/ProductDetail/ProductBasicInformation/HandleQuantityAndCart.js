import * as React from "react";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { useState } from "react";
import Paper from "@mui/material/Paper";

const AddToCartButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#D0011B"),
  backgroundColor: "#D0011B",
  "&:hover": {
    backgroundColor: "#D0011B",
  },
}));

const HandleQuantityAndCart = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div className="flex flex-col space-y-6 mt-10">
        <div className="flex flex-row ">
          <div className="flex flex-row items-center">
            <h1 className="text-[#929292] text-lg mr-6">Quantity :</h1>
            <button
              className="px-2 border"
              onClick={() => {
                setQuantity(Math.max(quantity - 1, 0));
              }}
            >
              -
            </button>

            <Paper variant="outlined" sx={{ width: 40, textAlign: "center" }}>
              {quantity}
            </Paper>

            <button
              className="border px-2"
              onClick={() => {
                setQuantity(quantity + 1);
              }}
            >
              +
            </button>
          </div>

          <div className="w-[40%] ml-6">
            <AddToCartButton
              variant="outlined"
              startIcon={<ShoppingCartIcon />}
            >
              Add to cart
            </AddToCartButton>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HandleQuantityAndCart;
