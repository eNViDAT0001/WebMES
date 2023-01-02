import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import { Comment } from "../../../Comment/Comment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchDescriptionFromOneProduct } from "../../../../store/slices/ProductSlice";
import { checkObjectEmpty } from "../../../../stogare_function/listActions";

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

const DetailInformation = (props) => {
  const [value, setValue] = useState("review");
  const dispatch = useDispatch();
  const getDescription = useSelector((state) => state.product.Description);
  useEffect(() => {
    if (getDescription.status !== 200) {
      dispatch(FetchDescriptionFromOneProduct(props.id));
    }
  }, [getDescription, dispatch, props.id]);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const TabPanelDescription = () => {
    if (!checkObjectEmpty(getDescription)) return{}
    getDescription.data.data.map((description) => (
      <TabPanel value={description.Name}>
        <div className=" h-87px mt-9 text-gray-content-product-detail">
          <h1>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </h1>
        </div>
      </TabPanel>
    ));
  };

  const TabValueDescription = () => {
    if (!checkObjectEmpty(getDescription)) return;
    getDescription.data.data.map((description) => (
      <StyledTab label={description.Name} value={description.Name} />
    ));
  };
  return (
    <div className="px-[170px] bg-[#F5F8FE] py-[50px] my-6 ">
      <div className="border p-10 bg-white">
        <TabContext value={value}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ bgcolor: "#FFFFFF" }}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
              >
                <StyledTab label="Review" value="review" />
                {TabValueDescription}
              </StyledTabs>
              <Box sx={{ p: 3 }} />
            </Box>
          </Box>
          {TabPanelDescription}

          <TabPanel value="review">
            <Comment id={props.id} />
          </TabPanel>
        </TabContext>
      </div>
    </div>
  );
};
export default DetailInformation;
