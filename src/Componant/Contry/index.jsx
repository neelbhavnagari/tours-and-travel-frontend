import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const index = ({ image, Title, description }) => {
  return (
    <div>
      <Box>
        <img src={image} alt="" />
      </Box>
      <Box>
        <Stack>
          <Typography variant="h4">{Title}</Typography>
          <Typography variant="h6">{description}</Typography>
        </Stack>
      </Box>
    </div>
  );
};

export default index;
