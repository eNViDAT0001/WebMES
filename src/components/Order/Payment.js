import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import React from "react";

const CustomerBasicInformationInPayment = () => {
  return (
    <div className="space-y-8 ">
      <h1>Customer Information</h1>
      <div className=" flex flex-row space-x-5 w-full">
        <div className="flex flex-col w-[40%] space-y-3">
          <h1>Full name</h1>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
        </div>
        <div className="flex flex-col w-[35%] space-y-3">
          <h1>Phone number</h1>
          <TextField id="outlined-basic" label="Phone" variant="outlined" />
        </div>
        <div className="flex flex-col w-[30%] space-y-3">
          <h1>Gender</h1>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[{ label: "Male" }, { label: "Female" }]}
            sx={{ width: "100%" }}
            renderInput={(params) => <TextField {...params} label="Gender" />}
          />
        </div>
      </div>
    </div>
  );
};

const AddressInCustomer = () =>{
  return(
    <div className="space-y-8 ">
      <div className="flex flex-col w-full space-y-3 mt-[32px]">
        <h1>Address</h1>
        <TextField id="outlined-basic" label="Address" variant="outlined" />
      </div>
      <div className=" flex flex-row space-x-5 w-full">
        <div className="flex flex-col w-[40%] space-y-3">
          <h1>Province</h1>
          <TextField id="outlined-basic" label="Province" variant="outlined" />
        </div>
        <div className="flex flex-col w-[35%] space-y-3">
          <h1>District</h1>
          <TextField id="outlined-basic" label="District" variant="outlined" />
        </div>
        <div className="flex flex-col w-[35%] space-y-3">
          <h1>Ward</h1>
          <TextField id="outlined-basic" label="Ward" variant="outlined" />
        </div>
      </div>
    </div>
  )
}

const PaymentMethod = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return(
    <div className="space-y-8 mt-[32px]">
      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">
          Payment method
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="COD" control={<Radio />} label="COD" />
          <FormControlLabel value="Paypal" control={<Radio />} label="Paypal" />
        </RadioGroup>
      </FormControl>
    </div>
  )
}
const Payment = () => {
  
  return (
    <div className="w-full bg-[#F7FAFC] p-8">
      <CustomerBasicInformationInPayment /> 
      <AddressInCustomer />
      <PaymentMethod />
      <div className=" border-b mx-[-20px] border-black"></div>
    </div>
  );
};

export default Payment;
