"use client";
import { useMediaQuery, Box, Drawer, useTheme } from "@mui/material";
import Logo from "../shared/logo/Logo";
import SidebarItems from "./SidebarItems";
import  { Upgrade }from "./Updrade";

const Sidebar = ({ isMobileSidebarOpen, onSidebarClose, isSidebarOpen }) => {
  const theme = useTheme();
  const lgUp = useMediaQuery(theme.breakpoints.up("lg"));

  const sidebarWidth = "270px";

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        {/* ------------------------------------------- */}
        {/* Sidebar for desktop */}
        {/* ------------------------------------------- */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {/* ------------------------------------------- */}
          {/* Sidebar Box */}
          {/* ------------------------------------------- */}
          <Box
            sx={{
              height: "100%",
            }}
          >
            {/* ------------------------------------------- */}
            {/* Logo */}
            {/* ------------------------------------------- */}
            <Box px={3}>
              <Logo />
            </Box>

        <Box px={2} color={"blue"} bgcolor={"orange"} borderRadius={5}>
        <div className=" grid grid-cols-2 gap-4">
         <div>
          <p>Account Balance</p>
          <p>Main Wallet</p>
          <p>Profit Wallet</p>
         </div>
         <div>
         <button className=" bg-white w-18 rounded-full text-sm shadow-lg">WALLET</button>
          <p>$0.00</p>
          <p>$5.00</p>
         </div>
        </div>
      </Box>

      <div className=" grid grid-cols-2 gap-2 my-10">
      <div className=" border bg-blue-400  text-center">
        <p> Deposit</p>
      </div>
      <div className=" border bg-green-400  text-center">
        <p> Invest Now</p>
      </div>

      </div>
            <Box>
              {/* ------------------------------------------- */}
              {/* Sidebar Items */}
              {/* ------------------------------------------- */}
              <SidebarItems />
             
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
        },
      }}
    >
      {/* ------------------------------------------- */}
      {/* Logo */}
      {/* ------------------------------------------- */}

      <Box px={2}>
        <Logo />
      </Box>
    
        
     
      {/* ------------------------------------------- */}
      {/* Sidebar For Mobile */}
      {/* ------------------------------------------- */}
      <SidebarItems />
      <Upgrade />
    </Drawer>
  );
};

export default Sidebar;
