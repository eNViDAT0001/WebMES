import AccountCircle from "@mui/icons-material/AccountCircle";
import React, { useEffect, useState } from "react";
import Rating from "@mui/material/Rating";
import { Divider, Pagination } from "@mui/material";
import { fetchAllComment } from "../../store/slices/CommentSlice";
import { useDispatch, useSelector } from "react-redux";
const convertDate = (date)=>{
  const newDate = new Date(date)
  return newDate.toISOString().split('T')[0]
}
const checkObjectEmpty = (object) => {
  return Object.keys(object).length === 0;
};
const transformFilters = (filters) => {
  var result = Object.keys(filters)
    .map((key) => {
      return "" + key + "=" + filters[key]; // line break for wrapping only
    })
    .join("&");
  return result;
};
export const ListComment = () => {
  const dispatch = useDispatch();
  const Comment = useSelector((state) => state.comment.comment);
  const [filters, setFilters] = useState({
    marker: 1,
    limit: 3,
  });
  useEffect(() => {
    const FetchComment = () => {
      dispatch(fetchAllComment(1, transformFilters(filters)));
    };
    FetchComment();
  }, [dispatch, filters]);

  useEffect(() => {
    if (checkObjectEmpty(Comment)) {
      dispatch(fetchAllComment(1));
    }
  }, [dispatch, Comment]);
  const listCommentData = !checkObjectEmpty(Comment) ? Comment.data.data : [];
  const pagingCommentData = !checkObjectEmpty(Comment) ? Comment.data.meta : {};
  const handlePaging = (e) => {
    const new_obj = { ...filters, marker: parseInt(e.target.textContent) };
    setFilters(new_obj);
  };
  console.log(Comment);
  return (
    <div className="flex flex-col space-y-5 px-5 w-full min-w-[350px]">
      <div className="flex justify-center">
        <Pagination
          count={
            !checkObjectEmpty(pagingCommentData)
              ? pagingCommentData.paging.Pages
              : 1
          }
          showFirstButton
          showLastButton
          onChange={handlePaging}
        />
      </div>
      {listCommentData.map((data) => (
        <div
          key={data.id}
          className="border-2 border-[#FFFFFF] flex flex-row min-h-[120px] rounded-md p-2 shadow-md  items-start justify-between"
        >
          <div className="flex flex-row">

            <AccountCircle sx={{ width: 60, height: 60 }} />
            <div className="flex flex-col ml-4 p-1 space-y-2">
              <div className="flex flex-row space-x-1 ">
                <h1 className=" text-sm font-bold">{data.Name}</h1>
                <h1 className=" text-sm font-bold text-[#808080]">
                  - {convertDate(data.CreatedAt)}
                </h1>
              </div>
              <Rating readOnly value={data.Rating} size="small" />
              <Divider light />

              <h1 className="mt-4 text-[#808080]">"{data.Description}"</h1>
              <div className="flex flex-row space-x-1">
                {data.Media !== null ? (
                  data.Media.map((media) => (
                    <div>
                      <img
                        src={media.mediaPath}
                        alt="Anh san pham"
                        className="max-w-[200px] max-h-[200px]"
                      ></img>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
