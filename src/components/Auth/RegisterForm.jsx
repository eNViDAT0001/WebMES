import React, { useState } from "react";


import { AuthApi } from "../../api/AuthApi";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { RegisterFormReq } from "../../models/AuthForm/RegisterFormReq";
export const RegisterForm = () => {

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [date, setDate] = useState("2001-01-01");
  const [gender, setGender] = useState("1");
  const [type, setType] = useState("BUYER");
  const [email, setEmail] = useState("");



  const handleChangeDataPicker = (event) => {
    setDate(event.target.value);
  };

  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangePassword = (event) =>{
    setPassword(event.target.value);

  }

  const handleChangeUsername = (event) =>{
    setUsername(event.target.value);

  }
  const handleChangePhone = (event) =>{
    setPhone(event.target.value);

  }
  const handleChangeName = (event) =>{
    setName(event.target.value);

  }

  const handleChangeEmail = (event) =>{
    setEmail(event.target.value)
  }

  const trueGender = (gender) => {
    if(gender === "1") return true
    else return false 
  }
  
  const Register = async(body) =>{
    const respond = await AuthApi.RegisterUser(body)
      if(respond.data.Token !== undefined){
        localStorage.setItem("AccessToken",respond.data.access_token)
        localStorage.setItem("AccessTokenExpiry",respond.data.access_token_expiry)
        localStorage.setItem("RefreshToken",respond.data.refresh_token)
        localStorage.setItem("RefreshTokenExpiry",respond.data.refresh_token_expiry)
      }else{
        console.log("Can't storage access token")
      }
    }

  const activeRegister =()=> {
    const body = new RegisterFormReq({
      username: username,
      password: password,
      phone: phone,
      gender: trueGender(gender),
      type: type,
      birthday: date,
      name: name,
      email: email,
    });
    
    Register(body)
  }

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
            label="User name"
            id="outlined-required"
            size="small"
            variant="standard"
            onChange={handleChangeUsername}
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
            onChange={handleChangePassword}

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
            label="Email"
            id="outlined-required"
            size="small"
            variant="standard"
            onChange={handleChangeEmail}

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
              onChange={handleChangeName}

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
              onChange={handleChangePhone}

            />
          </Box>
        </div>

          <TextField
            id="date"
            label="Birthday"
            type="date"
            defaultValue={date}

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
