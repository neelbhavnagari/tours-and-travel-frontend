import React, { useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ChipGroup from "../../Componant/chip";
// import { data } from "../../utils/palce";
import axios from "axios";
import Package from "../Package";

const Index = () => {
  // const da = async () => {
  //   const response = await axios.get(
  //     "http://localhost:8000/api/v1/data/packages"
  //   );
  //   console.log(response.data[0].countryName);
  // };
  // useEffect(() => {
  //   da();
  // }, []);
  return (
    <Box>
      <Box>
        <Stack justifyContent="center" alignItems="center" m={2} p={2}>
          <Typography variant="h4" p={2}>
            Explore Popular Cities
          </Typography>
          <Typography variant="h5">
            “Skyscrapers touching the clouds – that’s my city’s way of reaching
            for the stars.”
          </Typography>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
        }}
      >
        <ChipGroup />
      </Box>
      <Box>
        <Package />
      </Box>
    </Box>
  );
};

export default Index;
