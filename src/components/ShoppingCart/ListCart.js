import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import { checkObjectEmpty } from "../../stogare_function/listActions";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchAllCartShopping,
  setSelectedCart,
} from "../../store/slices/CartSlice";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
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

const ListCart = () => {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.listCart);
  const selectedCart = useSelector((state) => state.cart.selectedCart);

  const [optionListCart, setOptionListCart] = useState([]);
  const [isFirstRender, setIsFirseRender] = useState(true);

  const loadCart = useCallback(async () => {
    await dispatch(FetchAllCartShopping(localStorage.getItem("UserID")));
  });
  useLayoutEffect(() => {
    if (listCart.status != 200 && listCart.status != 204) {
      loadCart();
    }
    if (listCart.status == 200) {
      if (isFirstRender) {
        setIsFirseRender(false);
        const result = listCart.data.data.map(({ Name: label, ...rest }) => ({
          label,
          ...rest,
        }));
        setOptionListCart(result);
      }
    }
  }, [loadCart, listCart, isFirstRender, setOptionListCart]);

  const handleChangeComboBox = (e, value) => {
    dispatch(setSelectedCart(value));
  };
  return (
    <div>
      <div className=" w-[65%]">
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={optionListCart}
          onChange={handleChangeComboBox}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Select your Provider" />
          )}
        />
      </div>
      <div>
        {!checkObjectEmpty(selectedCart) ? (
          <div className="space-y-3">
            <h1 className="font-bold text-xl">Your select:</h1>
            <div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 400 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Image</StyledTableCell>
                      <StyledTableCell align="right">Name </StyledTableCell>
                      <StyledTableCell align="right">Price</StyledTableCell>
                      <StyledTableCell align="right">Quantity</StyledTableCell>
                      <StyledTableCell align="right">Discount</StyledTableCell>
                      <StyledTableCell align="right">Option</StyledTableCell>

                      <StyledTableCell align="right">Total</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {selectedCart.Items.length === 0 ? (
                      <div></div>
                    ) : (
                      selectedCart.Items.map((row) => (
                        <StyledTableRow key={row.id}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            sx={{ width: 100, padding: 1 }}
                          >
                            <img
                              src={row.media_path}
                              alt="Anh san pham"
                              className="w-[100px] h-[100px]"
                            ></img>
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.name}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.price}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.quantity}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.discount}{" "}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row.option_name}{" "}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {(row.quantity*row.price)*(100-row.discount)/100}{" "}
                          </StyledTableCell>

                        </StyledTableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default ListCart;
