import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import ContactPage from "../../pages/StorePages/ContactPage";
import NotFoundPage from "../../pages/StorePages/NotFoundPage";
import FAQPage from "../../pages/StorePages/FAQPage";
export const OrderTabPages = () => {
  const [value, setValue] = React.useState("1");


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className= "w-[50%]">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Account" value="1" />
              <Tab label="Shipping" value="2" />
              <Tab label="Payment" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <ContactPage />
          </TabPanel>
          <TabPanel value="2">
            <FAQPage />
          </TabPanel>
          <TabPanel value="3">
            <NotFoundPage />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
