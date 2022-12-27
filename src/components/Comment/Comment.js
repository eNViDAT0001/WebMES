import { Button } from "@mui/material";
import React, { useState } from "react";
import { AddComment } from "./AddComment";
import { ListComment } from "./ListComment";

export const Comment = (props) => {
  const [open, setOpen] = useState(false);
  const [textButton,setTextButton] = useState("Write comment")
  const buttonWriteComment = (e)=>{
    if(!open) { 
      setOpen(true)
      setTextButton("Hide your comment")
    }
    else{
      setOpen(false)
      setTextButton("Write comment")
    }
  }
  return (
    <div className="bg-[#FFFFFF] p-5 font-[Satoshi] shadow-lg rounded-2xl">
      <div className="flex flex-row items-center">

        <Button
          variant="contained"
          sx={{ height: 50 }}
          onClick={buttonWriteComment}
        >
          {textButton}
        </Button>
        
      </div>
      {!(open) ? (<div></div>) : (<AddComment />)}
      <ListComment />
    </div>
  );
};
