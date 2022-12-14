import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

export const FormUpdatePhone = () => {
    const [phone,setPhone] = useState("")
    
  return (
    <div className="w-[250px] h-[175px] bg-[#F8F8FD] flex justify-center flex-col p-10 space-y-6">
      <h1 className="text-xl text-[#1D1378] align-middle">Update Phone</h1>
      <TextField size="small" />
      <Button variant="contained" endIcon={<ChangeCircleIcon />}>
        Send
      </Button>{" "}
    </div>
  );
};
