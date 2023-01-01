import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { AddComment } from "./AddComment";
import { FiltersComment } from "./FiltersComment";
import { ListComment } from "./ListComment";

export const Comment = (props) => {
  const [openComment, setOpenComment] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);

  const [textButtonComment, setTextButtonComment] = useState("Write comment");
  const [textFilter, setTextFilter] = useState("Filters");
  const handleButtonFilter=(e)=>{
    if (!openFilter) {
      setOpenFilter(true);
      setTextFilter("Hide Filters");
    } else {
      setOpenFilter(false);
      setTextFilter("Filters");
    }
  }
  const buttonWriteComment = (e) => {
    if (!openComment) {
      setOpenComment(true);
      setTextButtonComment("Hide your comment");
    } else {
      setOpenComment(false);
      setTextButtonComment("Write comment");
    }
  };
  return (
    <div className="bg-[#FFFFFF] p-5 font-[Satoshi] shadow-lg rounded-2xl">
      <div className="flex flex-row items-center">
        <Button
          variant="contained"
          sx={{ height: 50 }}
          onClick={buttonWriteComment}
        >
          {textButtonComment}
        </Button>
      </div>
      {!openComment ? <div></div> : <AddComment id={props.id} />}
      <div className="my-5">
        <Divider />
      </div>
      <Button
          variant="contained"
          sx={{ height: 50 }}
          onClick={handleButtonFilter}
        >
          {textFilter}
        </Button>
        {/*!openFilter?<div></div> : <FiltersComment />*/}
      <ListComment id={props.id}/>
    </div>
  );
};
