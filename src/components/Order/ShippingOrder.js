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
import { GetUserInformationDetail } from "../../store/slices/UserSlice";
const ShippingOrder = () => {

  const dispatch = useDispatch()
  const [ProvinceId,setProvinceId] = useState("")
  const [isClicked, setIsClicked] = useState(false);

  const ChangeUIWhenClickButton = () => {
    setIsClicked(!isClicked);
  };

  const onChangeProvince = (e, value) =>{
    setProvinceId(value.id)
  }

  const onChangeDistrict = (e,value) =>{
    dispatch(fetchWardFromDistrict(value.id))
  }
  useEffect(() => {
    dispatch(fetchAllProvince());
  }, []);
  useEffect(() => {
    dispatch(fetchDistrictFromProvince(ProvinceId))
  },[ProvinceId]);
  
 //name,gender,phone
  const Name = useSelector((state)=>state.user.name)
  const ID = useSelector((state)=>state.user.ID)
  const Gender =  useSelector((state)=>state.user.gender)
  const Phone = useSelector((state)=>state.user.phone)

  dispatch(GetUserInformationDetail(localStorage.getItem("UserID")))

  const DataProvince = useSelector((state) => state.address.Province)
  const DataDistrict = useSelector((state)=> state.address.District)
  const DataWard = useSelector((state) => state.address.Ward)

  const newDataProvince = DataProvince.map(({Name: label,Code: id,...rest}) => ({label,id,...rest}));

  const newDataDistrict = DataDistrict.map(({Name: label,...rest}) => ({label,...rest}));
  const newDataWard = DataWard.map(({Name: label,...rest}) => ({label,...rest}));

  GetUserInformationDetail(localStorage.getItem("UserID"))
  return (
    <div className="w-full space-y-8 bg-[#F7FAFC] p-8">
      <h1 className=" text-xl font-sans font-semibold"> Shipping Detail</h1>
      <div className="flex flex-row justify-between items-center mt">

        <FormControlLabel
          className="text-[#2D3748]"
          control={<Checkbox size="small" color="default" />}
          label="Choose address save"
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
          getOptionSelected={(option, value) => option === value}
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
