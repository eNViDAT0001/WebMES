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
    backgroundColor: "#FB2E86",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const addressSave=[]

export const ListViewProducts = () => {
  return (
    <div className="space-y-3">
      <h1 className="font-bold text-xl">Table product:</h1>
      <div>
        <ToastContainer position="top-right" newestOnTop />

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Full name</StyledTableCell>
                <StyledTableCell align="right">Address</StyledTableCell>
                <StyledTableCell align="right">Province</StyledTableCell>
                <StyledTableCell align="right">District</StyledTableCell>
                <StyledTableCell align="right">Phone number</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!addressSave ? (
                <div></div>
              ) : (
                addressSave.map((row) => (
                  <StyledTableRow key={row.ID}>
                    <StyledTableCell component="th" scope="row">
                      {row.Name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Street}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.Province}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.District}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.Phone}</StyledTableCell>
                    <StyledTableCell align="right">
                      <IconButton id={row.ID} aria-label="fix" size="small">
                        <SettingsRoundedIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        id={row.ID}
                        aria-label="delete"
                        size="small "
                      >
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
