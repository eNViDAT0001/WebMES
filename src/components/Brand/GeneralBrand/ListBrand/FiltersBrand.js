import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
export const FiltersBrand = () => {
  return (
    <div className="my-10 border shadow-xl rounded-2xl p-5">
      <div className="font-[Inter]">
        <div className="flex flex-row justify-start space-x-10">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Sort by</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="sort"
              name="radio-buttons-group"
            >
              <FormControlLabel value="name" control={<Radio />} label="Name" />
              <FormControlLabel
                value="createdAt"
                control={<Radio />}
                label="Created at"
              />
            </RadioGroup>
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Type sort</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="type"
              name="radio-buttons-group"
            >
              <FormControlLabel value="increase" control={<Radio />} label="Increase" />
              <FormControlLabel
                value="decrease"
                control={<Radio />}
                label="Decrease"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <h1 className="font-bold text-lg my-5"> Search name branch:</h1>
        <div className="mb-4">
          <Divider />
        </div>
        <Divider />
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search" }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>

      </div>
    </div>
  );
};
