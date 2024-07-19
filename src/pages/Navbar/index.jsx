import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "rgba(240, 240, 240, 0.8)",
        py: 2,
        position: "absolute",
        width: "100%",
        zIndex: 1,
      }}
    >
      <header>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 4,
          }}
        >
          <Box>
            <Typography variant="h3" color={"white"}>
              tour guide
            </Typography>
          </Box>
          <Box component="nav" sx={{ display: "flex", alignItems: "center" }}>
            <ul
              style={{
                listStyleType: "none",
                display: "flex",
                gap: "30px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              <li>Home</li>
              <li>About us</li>
              <li>Popular Destinations</li>
              <li>Our Packages</li>
              <li>Help</li>
            </ul>
            <Button variant="contained" color="primary" sx={{ ml: 2 }}>
              Sign in
            </Button>
          </Box>
        </Box>
      </header>
    </Box>
  );
};

export default Navbar;
