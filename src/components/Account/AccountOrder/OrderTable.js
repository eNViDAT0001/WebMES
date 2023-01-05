import React, { useState } from "react";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";


import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import {
  Divider,
  IconButton,
  Pagination,
  Paper,
  TableHead,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&$hover:hover": {
    backgroundColor: "#F1F5F8",
  },
}));

const ListStatus = ["WAITING", "CONFIRM", "DELIVERING", "DELIVERED"];
const ListOrders = [
    
  ];
export const OrderTable = (props) => {

  
    const handleButtonDetail=(e)=>{
      window.location.replace(`order-detail/${e.currentTarget.id}`)
    }
  return <div>
    <TableContainer component={Paper}>
          <Table
            sx={{
              maxWidth: 2000,
              width: 1.0,
            }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">Detail</StyledTableCell>

                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Brand</StyledTableCell>
                <StyledTableCell align="left">Phone</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="left">TotalCost</StyledTableCell>
                <StyledTableCell align="left">Created At</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!ListOrders ? (
                <div></div>
              ) : (
                ListOrders.map((row) => (
                  <StyledTableRow
                    className={{
                      hover: {
                        "&$hover:hover": {
                          backgroundColor: "#49bb7b",
                        },
                      },
                    }}
                    hover
                    key={row.id}
                  >
                    <StyledTableCell align="left">
                      <IconButton aria-label="delete" id={row.id} onClick={handleButtonDetail}>
                        <RemoveRedEyeIcon />
                      </IconButton>
                    </StyledTableCell>

                    <StyledTableCell align="left">{row.name}</StyledTableCell>
                    <StyledTableCell  align="left">{row.brand}</StyledTableCell>
                    <StyledTableCell align="left">{row.phone}</StyledTableCell>
                    <StyledTableCell sx={{width:0.2}} align="left">
                      {row.address}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {row.total_cost}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.createdAt}{" "}
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
  </div>;
};
