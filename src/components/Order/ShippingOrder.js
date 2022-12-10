import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  AddSaveAddress,
  fetchAllProvince,
  fetchDistrictFromProvince,
  fetchWardFromDistrict,
  GetListAddress,
} from "../../store/slices/AddressSlice";
import { GetUserInformationDetail } from "../../store/slices/UserSlice";
import { SaveAddressForm } from "../../models/SaveAddressForm/SaveAddressForm";
const ShippingOrder = () => {
  const dispatch = useDispatch();

  const UserDetail =  useSelector((state) => state.user.UserDetail);
  const Name = UserDetail.name
  const Gender = UserDetail.gender;
  const Phone = UserDetail.phone;

  
  const ID = localStorage.getItem("UserID");
  

  const [ProvinceID, setProvinceID] = useState("");
  const [DistrictID, setDistrictID] = useState("");
  const [WardID, setWardID] = useState("");
  const [Street, setStreet] = useState("");

  const [isClicked, setIsClicked] = useState(false);

  const ChangeUIWhenClickButton = () => {
    setIsClicked(!isClicked);
  };
  const ChangeStreetTextBox = (e) => {
    setStreet(e.target.value);
  };
  const onChangeProvince = (e, value) => {
    setProvinceID(value.id);
  };

  const onChangeDistrict = (e, value) => {
    setDistrictID(value.id);
  };
  const onChangeWard = (e, value) => {
    setWardID(value.id);
  };

  useEffect(() => {
    dispatch(fetchAllProvince());
    dispatch(GetListAddress(ID))
    dispatch(GetUserInformationDetail(ID));
  }, [dispatch,ID]);

  useEffect(() => {
    dispatch(fetchDistrictFromProvince(ProvinceID));
  }, [dispatch,ProvinceID]);
  useEffect(() => {
    dispatch(fetchWardFromDistrict(DistrictID));
  }, [dispatch,DistrictID]);

  const ClickGoToPayment = () => {
    if (!isClicked) {
      const body = new SaveAddressForm({
        user_id: ID,
        name: Name,
        gender: Gender,
        phone: Phone,
        province_code: ProvinceID,
        district_code: DistrictID,
        ward_code: WardID,
        street: Street,
      });
      const data = dispatch(AddSaveAddress(ID, body));
      if (data !== undefined) {
        window.location.reload(false)
      }
    }
  };

  const DataAddressSave = useSelector((state) => state.address.UserAddress);
  const DataProvince = useSelector((state) => state.address.Province);
  const DataDistrict = useSelector((state) => state.address.District);
  const DataWard = useSelector((state) => state.address.Ward);

  const newAddressSave = DataAddressSave.map((data)=>{
    return {
      ...data,
      label: data.Street + ","+data.Ward + ","+ data.District + ","+ data.Province
    }
  })
  const newDataProvince = DataProvince.map(
    ({ Name: label, Code: id, ...rest }) => ({ label, id, ...rest })
  );

  const newDataDistrict = DataDistrict.map(
    ({ Name: label, Code: id, ...rest }) => ({ label, id, ...rest })
  );
  const newDataWard = DataWard.map(({ Name: label, Code: id, ...rest }) => ({
    label,
    id,
    ...rest,
  }));

  return (
    <div className="w-full space-y-8 bg-[#F7FAFC] p-8">
      <h1 className=" text-xl font-sans font-semibold"> Shipping Detail</h1>
      <div className="flex flex-row justify-between items-center mt">
        <FormControlLabel
          className="text-[#2D3748]"
          control={<Checkbox size="small" color="default" />}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          label="Choose address save"
          onChange={ChangeUIWhenClickButton}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          disabled={!isClicked}
          options={newAddressSave}
          isOptionEqualToValue={(option, value) => option.id === value.id}
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
            disabled={isClicked}
            sx={{ width: 300 }}
            onChange={onChangeProvince}
            renderInput={(params) => <TextField {...params} label="Province" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={newDataDistrict}
            disabled={isClicked}
            onChange={onChangeDistrict}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="District" />}
          />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={newDataWard}
            disabled={isClicked}
            onChange={onChangeWard}
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
          onChange={ChangeStreetTextBox}
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
          <Button variant="contained" size="large" onClick={ClickGoToPayment}>
            Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShippingOrder;
