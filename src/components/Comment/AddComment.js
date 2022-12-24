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

export const AddComment = () => {
  const [value, setValue] = useState(0);
  const [hover, setHover] = useState(-1);
  const [fileUpload, setFileUpload] = useState();
  useEffect(()=>{
      console.log(fileUpload)
    
  },[fileUpload])
  const handleButtonUploadFile = (e) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file)
    setFileUpload(file);
  };
  return (
    <div className="flex flex-col space-y-5 px-5 w-full min-w-[350px] my-10">
      <h1 className=" text-xl font-bold">Add your comment:</h1>

      <div className="border space-y-6 p-4 rounded-md shadow-md">
        <div className="flex flex-row items-center space-x-4 ">
          <h1 className=" text-xl font-bold">Choose Rating:</h1>
          <Box
            sx={{
              width: 200,
              display: "flex",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
            ></Rating>
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
        </div>
        <div className="flex flex-row space-y-2 items-center">
          <h1 className=" text-xl font-bold">Comment:</h1>
          <div className="w-full px-10">
            <TextField
              sx={{
                width: 1,
              }}
              id="outlined-basic"
              label="Write comment here"
              size="small"
              multiline
              maxRows={4}
            />
          </div>

          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            onChange={handleButtonUploadFile}
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
          </IconButton>
        </div>
        {fileUpload ? (
          <div className="flex justify-start space-x-2">
            <img src={fileUpload.preview} alt="anh comment" className="w-[150px] h-[150px]"></img>
            <img src={fileUpload.preview} alt="anh comment" className="w-[150px] h-[150px]"></img>
            <img src={fileUpload.preview} alt="anh comment" className="w-[150px] h-[150px]"></img>

          </div>
        ) : (
          <div></div>
        )}
        <div className="flex flex-row-reverse">
          <Button variant="contained"> Send</Button>
        </div>
      </div>
    </div>
  );
};
