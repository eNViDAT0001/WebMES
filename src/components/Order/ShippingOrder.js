import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const ShippingOrder = () => {
  const [isClicked, setIsClicked] = useState(false);
  const ChangeUIWhenClickButton = () => {
    setIsClicked(!isClicked);
  };
  const saveAddress = [
    {
      label: "TP HCM",
    },
    {
      label: "TP HN",
    },
    {
      label: "TP CM",
    },
  ];
  const shipping = [
    {
      label: "Free Shipping",
    },
    {
      label: "Fast Shipping",
    },
    {
      label: "Slow Shipping",
    },
  ];
  return (
    <div className="w-full space-y-8 bg-[#F7FAFC] p-8">
      <h1 className=" text-xl font-sans font-semibold"> Shipping Detail</h1>
      <div className="flex flex-row justify-between items-center mt">

        <FormControlLabel
          className="text-[#2D3748]"
          control={<Checkbox size="small" color="default" />}
          label="Create new Address"
          onChange={ChangeUIWhenClickButton}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={saveAddress}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Address" />}
        />
      </div>
      <div className="space-y-8">
      <h1 className="text-[#ABB1B9]">Select Address: </h1>
      <div className="flex flex-row space-x-6">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={saveAddress}
          disabled={isClicked}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Province" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={saveAddress}
          disabled={isClicked}

          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Wist" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={saveAddress}
          disabled={isClicked}

          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="District" />}
        />
      </div>
      <h1 className=" text-[#ABB1B9]">Street Name: </h1>
      <TextField
        id="outlined-basic"
        label="Street"
        variant="outlined"
        disabled={isClicked}

        className="h-max-[5px] w-full"
      />
    </div>

      <div className="flex flex-row ">
        <div className="flex flex-col space-y-3">
          <h1 className=" text-[#ABB1B9]">Postcode</h1>
          <TextField
            id="outlined-basic"
            label="Code"
            variant="outlined"
            className="h-max-[5px] "
          />
        </div>
        <div className="flex flex-col  ml-10  space-y-3">
          <h1 className=" text-[#ABB1B9]">Select Shipping</h1>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={shipping}
            sx={{ width: 300 }}
            className="w-full"
            renderInput={(params) => <TextField {...params} label="Shipping" />}
          />
        </div>
      </div>
      <div className=" border-b mx-[-20px] border-black"></div>
      <div className="flex flex-row-reverse">
        <div className="space-x-8">
          <Button variant="outlined" disabled size="large">
            Cancel Order
          </Button>
          <Button variant="contained" size="large">
            Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShippingOrder;
