import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react" 
import {fetchAllProvince, fetchDistrictFromProvince, fetchWardFromDistrict} from "../../store/slices/AddressSlice"
import { ProductApi } from "../../api/productApi";
const ShippingOrder = () => {

  const dispatch = useDispatch()
  const [data,setData] = useState([])
  const [isClicked, setIsClicked] = useState(false);

  const ChangeUIWhenClickButton = () => {
    setIsClicked(!isClicked);
  };

  const onChangeProvince = (e, value) =>{
    dispatch(fetchDistrictFromProvince(value.id))
  }

  const onChangeDistrict = (e,value) =>{
    dispatch(fetchWardFromDistrict(value.id))
  }
  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);
  
  useEffect(()=>{
    setData(ProductApi.ReadFullProduct())
  },[])

  console.log(data)
  const DataProvince = useSelector((state) => state.address.Province)
  const DataDistrict = useSelector((state)=> state.address.District)
  const DataWard = useSelector((state) => state.address.Ward)

  const newDataProvince = DataProvince.map(({name: label,...rest}) => ({label,...rest}));
  const newDataDistrict = DataDistrict.map(({name: label,...rest}) => ({label,...rest}));
  const newDataWard = DataWard.map(({name: label,...rest}) => ({label,...rest}));


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
          options={[]}
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
          options={newDataProvince}
          getOptionSelected={(option, value) => option.id === value.id}
          disabled={isClicked}
          sx={{ width: 300 }}
          onChange = {onChangeProvince}
          renderInput={(params) => <TextField {...params} label="Province" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          getOptionSelected={(option, value) => option.id === value.id}

          options={newDataDistrict}
          disabled={isClicked}
          onChange = {onChangeDistrict}

          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="District" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          getOptionSelected={(option, value) => option.id === value.id}
          options={newDataWard}
          disabled={isClicked}

          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Ward" />}
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
            options={[]}
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
