import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import AllChats from "./AllChats";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TabsComponent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              "& .MuiTabs-indicator": {
                color: "white",
                height: "3px",
                backgroundColor: "#5682a3",
                borderRadius: "5px",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#5682a3",
              },
            }}
          >
            <Tab label="All Chats" {...a11yProps(0)} />
            <Tab label="Test" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <AllChats />
      </Box>
    </>
  );
};

export default TabsComponent;
