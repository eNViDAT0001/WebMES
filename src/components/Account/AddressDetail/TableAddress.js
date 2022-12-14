import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

import { useEffect } from "react";
import { GetListAddress } from "../../../store/slices/AddressSlice";
import { Button, IconButton } from "@mui/material";

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(fullname, street, province, district, ward) {
  return { fullname, street, province, district, ward };
}

export const TableAddress = (props) => {
  const dispatch = useDispatch();
  const addressSave = useSelector((state) => state.address.UserAddress);

  useEffect(() => {
    dispatch(GetListAddress(props.id));
  }, [dispatch, props.id]);
  const handleCreateNewAddress = (e) =>{
    window.location.replace('/address-create')
  }
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell align="right">Full name</StyledTableCell>
              <StyledTableCell align="right">Address</StyledTableCell>
              <StyledTableCell align="right">Postcode</StyledTableCell>
              <StyledTableCell align="right">Phone number</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {addressSave.map((row) => (
              <StyledTableRow key={row.ID}>
                <StyledTableCell component="th" scope="row">
                  {row.ID}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Name}</StyledTableCell>
                <StyledTableCell align="right">{row.Street}</StyledTableCell>
                <StyledTableCell align="right">{row.Province}</StyledTableCell>
                <StyledTableCell align="right">{row.Phone}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton aria-label="fix" size="small">
                    <SettingsRoundedIcon fontSize="inherit" />
                  </IconButton>
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex flex-row-reverse mt-5">
        <Button variant="contained" size="large" onClick={handleCreateNewAddress}>
          + Add new address
        </Button>
      </div>
    </div>
  );
};
