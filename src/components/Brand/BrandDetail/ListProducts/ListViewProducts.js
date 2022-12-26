import React from "react";

import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { Button, IconButton, Paper, TableHead } from "@mui/material";

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
}));
const ListProducts = [
  {
    id: 0,
    name: "Son môi size1",
    image:
      "https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?w=2000",
    category: "Son",
    isSold: false,
    createdAt: "2012-11-12",
    price: 50.0,
  },
  {
    id: 1,
    name: "Son môi size2",
    image:
      "https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?w=2000",
    category: "Son",
    createdAt: "2012-11-12",
    isSold: true,

    price: 50.0,
  },
  {
    id: 2,
    image:
      "https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?w=2000",
    category: "Son",
    isSold: true,
    createdAt: "2012-11-12",
    name: "Son môi size3",

    price: 50.0,
  },
];

export const ListViewProducts = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold text-xl">Table product:</h1>
      <div>
        <ToastContainer position="top-right" newestOnTop />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Image</StyledTableCell>
                <StyledTableCell align="right">Name Product</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right">Create at</StyledTableCell>
                <StyledTableCell align="right">Is Sold</StyledTableCell>

                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!ListProducts ? (
                <div></div>
              ) : (
                ListProducts.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      sx={{ width: 100, padding: 1 }}
                    >
                      <img
                        src={row.image}
                        alt="Anh san pham"
                        className="w-[100px] h-[100px]"
                      ></img>
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.name}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.category}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.createdAt}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {!row.isSold ? <div>No</div> : <div>Yes</div>}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton id={row.ID} aria-label="fix" size="small">
                        <SettingsRoundedIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton id={row.ID} aria-label="delete" size="small ">
                        <DeleteIcon fontSize="inherit" />
                      </IconButton>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
