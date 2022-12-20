import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import Rating from "@mui/material/Rating";
import { Divider, IconButton } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const ListCommentData = [
  {
    id: 0,
    user: "Lee Quoc Khanh",
    rating: 3,
    description: "Nay cung hay",
  },
  {
    id: 1,
    user: "Lee Quoc Khanh 1",
    rating: 3,
    description: "Cuoc song nay khong co gia tri",
  },
  {
    id: 2,
    user: "Lee Quoc Khanh 2",
    rating: 3,
    description: "Doi song thuong nhat la the",
  },
  {
    id: 3,
    user: "Lee Quoc Khanh 3",
    rating: 1,
    description: "Lam sao tot duoc",
  },
  {
    id: 4,
    user: "Lee Quoc Khanh 4",
    rating: 5,
    description: "Nay cung hay, kha bth",
  },
];
export const ListComment = () => {
  return (
    <div className="flex flex-col space-y-5 px-5 w-full min-w-[350px]">
      {ListCommentData.map((data) => (
        <div
          key={data.id}
          className="border-2 flex flex-row min-h-[120px] rounded-md p-2 shadow-sm items-start justify-between"
        >
          <div className="flex flex-row">
            <AccountCircle sx={{ width: 60, height: 60 }} />
            <div className="flex flex-col ml-4 p-1 space-y-2">
              <div className="flex flex-row space-x-1 ">
                <h1 className=" text-sm font-bold">{data.user}</h1>
                <h1 className=" text-sm font-bold text-[#808080]">
                  - 2 day ago{" "}
                </h1>
              </div>
              <Rating readOnly value={data.rating} size="small" />
              <Divider light />

              <h1 className="mt-4 text-[#808080]">"{data.description}"</h1>
            </div>
          </div>

          <div className="ml-4 right-0">
            <IconButton aria-label="delete" size="small">
              <ThumbUpIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
            <IconButton aria-label="delete">
              <ThumbDownIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
          </div>
        </div>
      ))}
    </div>
  );
};
