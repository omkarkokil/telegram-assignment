import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import React from "react";
import { useTheme } from "../../../../context/ThemeProvider";
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

  const { theme } = useTheme();
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            className="shadow-lg"
            aria-label="basic tabs example"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
              padding: "0 1rem",
              "& .MuiTabs-indicator": {
                color: "white",
                height: "3px",
                backgroundColor: `${
                  theme === "light" ? "[#3993ec] " : "#8774e1"
                }`,
                borderRadius: "5px",
              },
              "& .MuiTab-root.Mui-selected": {
                color: "#5682a3",
              },
              "& .MuiTab-root": {
                // Targeting all MUI Tab components
                fontSize: "13px", // Set your desired font size here
              },
            }}
          >
            <Tab
              label={
                <div className="flex items-center gap-2">
                  <h1 className="text-[#3993ec] font-semibold dark:text-[#8774e1]">
                    All
                  </h1>
                  <p className="text-white font-semibold dark:bg-[#8774e1] bg-[#3993ec] py-1 px-2 rounded-full">
                    23
                  </p>
                </div>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <div className="flex items-center gap-2">
                  <h1 className="text-[#3993ec] font-semibold dark:text-[#8774e1]">
                    Test
                  </h1>
                  <p className="text-white text-xs bg-[#3993ec] dark:bg-[#8774e1] py-1 px-2 rounded-full">
                    23
                  </p>
                </div>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <AllChats />
      </Box>
    </>
  );
};

export default TabsComponent;
