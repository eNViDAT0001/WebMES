import * as React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Comment } from "../../../Comment/Comment";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 100,
    width: "100%",
    backgroundColor: "#151875",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(1),
    color: "#151875",
    "&.Mui-selected": {
      color: "#151875",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

const DetailInformation = () => {
  const [value, setValue] = React.useState("description");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="px-[170px] bg-[#F5F8FE] py-[160px] my-20">
      <TabContext value={value}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ bgcolor: "#F5F8FE" }}>
            <StyledTabs
              value={value}
              onChange={handleChange}
              aria-label="styled tabs example"
            >
              <StyledTab label="Description" value="description" />
              <StyledTab label="Review" value="review" />
            </StyledTabs>
            <Box sx={{ p: 3 }} />
          </Box>
        </Box>
        <TabPanel value="description">

          <div className=" h-87px mt-9 text-gray-content-product-detail">
            <h1>
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
              ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
              varius ac est bibendum. Scelerisque a, risus ac ante. Velit
              consectetur neque, elit, aliquet. Non varius proin sed urna,
              egestas consequat laoreet diam tincidunt. Magna eget faucibus cras
              justo, tortor sed donec tempus. Imperdiet consequat, quis diam
              arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate
              nunc nec. Dui, massa viverr .
            </h1>
          </div>
        </TabPanel>
        <TabPanel value="review">
            <Comment />
        </TabPanel>
      </TabContext>
    </div>
  );
};
export default DetailInformation;
