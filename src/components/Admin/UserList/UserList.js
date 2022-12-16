import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetListUser } from "../../../store/slices/AdminSlice";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { AdminApi } from "../../../api/AdminApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
export const UserList = () => {
  const dispatch = useDispatch();
  const ListUser = useSelector((state) => state.admin.ListUser);

  useEffect(() => {
    const result = async () => {
      await dispatch(GetListUser());
    };
    result();
  }, [dispatch]);

  const DeleteOneUser = async(body)=>{
    await AdminApi.DeleteUser(body)
    .then((res)=>{
      console.log(res)
      toast("Delete address successful", {
        type: "success",
        autoClose: 2000,
        Close: setTimeout(
          () => //window.location.reload(),
          2000
        ),
      });
    })
  }
  const handleDelete = (e)=>{
    const body = []
    body.push(e.currentTarget.id)
    DeleteOneUser(body)
  }
  return (
    <div className="w-[85vw] h-[100%] p-x-30 flex justify-start ">
      <ToastContainer position="top-right" newestOnTop />

      <div className="w-full  border">
        <h1 className="ml-4 text-2xl text-[#1D3178] font-semibold">
          User List
        </h1>
        <div className="flex flex-auto flex-wrap space-x-10 mt-5 p-5 border">
          {ListUser.map((data) => (
            <div
              key={data.ID}
              className="w-[20%] h-[200px] border my-[38px] ml-[36px] p-2 bg-gradient-to-r"
            >
              <div className="flex flex-row flex-wrap">
                <AccountCircleIcon sx={{ width: 50, height: 50 }} />
                <div className="flex flex-col ml-2">
                  <h1>{data.username}</h1>
                  <h1>{data.name}</h1>
                </div>
                <div className=" top-0 right-0">
                  <IconButton id={data.ID} aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
