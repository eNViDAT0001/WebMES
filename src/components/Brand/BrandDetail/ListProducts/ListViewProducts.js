import React, { useEffect, useState } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import { FetchProductInHomePage } from "../../../../store/slices/ProductSlice";
import { useParams } from "react-router-dom";

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


export const ListViewProducts = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const ListProduct = useSelector(
    (state) => state.product.ProductPreviewInHomePage
  );
  const [listProductInProvider, setListProductInProvider] = useState([]);
  useEffect(() => {
    if (ListProduct.status != 200 && ListProduct.status != 204) {
      dispatch(FetchProductInHomePage());
    }
  }, [dispatch, ListProduct]);
  useEffect(() => {
    if (ListProduct.status == 200) {
      if (isFirstRender) {
        setIsFirstRender(false);
        const ResultProduct = ListProduct.data.data.filter(
          (data) => data.ProviderID === id
        );
        if (ResultProduct.length === 0) setListProductInProvider(ResultProduct);
      }
    }
  }, [isFirstRender, ListProduct, listProductInProvider, id]);

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
              {listProductInProvider.length===0 ? (
                <div></div>
              ) : (
                listProductInProvider.map((row) => (
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
