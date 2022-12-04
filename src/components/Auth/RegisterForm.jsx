import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import dayjs from "dayjs";


import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { TextField } from "@mui/material";
import { Box } from "@mui/system";

export const RegisterForm = () => {
  const [date, setDate] = React.useState(dayjs("2022-08-18T21:11:54"));
  const [gender, setGender] = React.useState("1");
  const [type, setType] = useState("BUYER");

  const handleChangeDataPicker = (event) => {
    setDate(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  console.log(date);


  const activeRegister = () => {};

  return (
    <div className="w-[60%] w-max-[200px] shadow-lg border p-[50px] min-w-[300px]">
      <div className=" flex items-center flex-col">
        <h1 className=" font-[Josefin_Sans] text-[32px]">Sign up Form</h1>
        <h1 className="font-[Lato] mt-2 text-[#9096B2]">
          Please fill your information detail below
        </h1>
      </div>
      <div className="space-y-6">
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Email"
            id="outlined-required"
            size="small"
            variant="standard"
          />
        </Box>

        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField
            fullWidth
            label="Password"
            id="outlined-required"
            size="small"
            variant="standard"
          />
        </Box>
        <div className="flex flex-row justify-between">
          <Box
            sx={{
              width: "55%",
              maxWidth: "400px",
            }}
          >
            <TextField
              fullWidth
              label="Name"
              id="outlined-required"
              size="small"
              variant="standard"
            />
          </Box>

          <Box
            sx={{
              width: "40%",
              maxWidth: "400px",
            }}
          >
            <TextField
              fullWidth
              label="Phone"
              id="outlined-required"
              size="small"
              variant="standard"
            />
          </Box>
        </div>

          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue="2017-05-24"
            onChange={handleChangeDataPicker}
            sx={{ width: 220 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        <div className="flex justify-between">
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="gender1"
              value={gender}
              onChange={handleChangeGender}
            >
              <FormControlLabel value="1" control={<Radio />} label="Male" />
              <FormControlLabel value="0" control={<Radio />} label="Female" />
            </RadioGroup>
          </FormControl>
          <FormControl component="fieldset">
            <FormLabel component="legend">Type</FormLabel>
            <RadioGroup
              row
              aria-label="type"
              name="Type"
              value={type}
              onChange={handleChangeType}
            >
              <FormControlLabel
                value="SELLER"
                control={<Radio />}
                label="Seller"
              />
              <FormControlLabel
                value="BUYER"
                control={<Radio />}
                label="Buyer"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <button
        className="w-full h-[40px] bg-[#FF1788] text-white mt-10"
        onClick={activeRegister}
      >
        Sign Up
      </button>
    </div>
  );
};
