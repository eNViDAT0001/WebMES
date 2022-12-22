import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { Box, Button, IconButton, TextField } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
const labels = {
  1: "Very bad",
  2: "Bad",
  3: "Normal",
  4: "Good",
  5: "Excellent",
};
const getLabelText = (value) => {
  return labels[value];
};

export const FormAddBrand = () => {
  return (
    <div className="flex flex-col space-y-5 px-5 w-full min-w-[350px] my-10">
      <h1 className=" text-xl font-bold">Add your brand:</h1>

      <div className="border space-y-6 p-4 rounded-md shadow-md">
        <div className="flex flex-row space-y-2 items-center">
          <h1 className=" text-xl font-bold whitespace-nowrap">Image :</h1>
          <div className="w-full px-10">
            <TextField
              sx={{
                width: 1,
              }}
              id="outlined-basic"
              label="Input url image here"
              size="small"
              multiline
              maxRows={4}
            />
          </div>
        </div>
        <div className="flex flex-row space-y-2 items-center">
          <h1 className=" text-xl font-bold ">Name:</h1>
          <div className="w-full px-10">
            <TextField
              sx={{
                width: 1,
              }}
              id="outlined-basic"
              label="Write new brand's name here"
              size="small"
              multiline
              maxRows={4}
            />
          </div>
        </div>

        <div className="flex flex-row-reverse pr-10">
          <Button variant="contained"> Add</Button>
        </div>
      </div>
    </div>
  );
};
