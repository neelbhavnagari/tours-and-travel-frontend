import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { touristPlaces } from "../../utils/touristPlace";
import Homepage from "../../asset/img/Homeimg.jpg";
import { Card, CardContent, keyframes, Stack } from "@mui/material";
import Train from "../../asset/svg/Train.svg";
import Nature from "../../asset/svg/Nature.svg";
import privater from "../../asset/svg/private.svg";
import bussiness from "../../asset/svg/bussiness.svg";
import local from "../../asset/svg/local.svg";

const ChipGroup = () => {
  const [selectedChip, setSelectedChip] = useState(null);

  const handleChipClick = (index) => {
    setSelectedChip(selectedChip === index ? null : index);
  };

  return (
    <div>
      <Box 
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          fontWeight: "600",
          padding: "30px",
        }}
      >
        {touristPlaces.length ? (
          touristPlaces.map((place, index) => (
            <Chip
              key={place.id}
              label={place.name}
              onClick={() => handleChipClick(index)}
              sx={{
              
                backgroundColor:
                  selectedChip === index ? "#7BBCB0" : "whitesmoke",
                color: selectedChip === index ? "white" : "#7BBCB0",
                "&:hover": {
                  backgroundColor:
                    selectedChip === index ? "whitesmoke" : "#7BBCB0",
                  color: selectedChip === index ? "#7BBCB0" : "white",
                },
              }}
              variant="outlined"
              color="default"
              size="medium"
            />
          ))
        ) : (
          <>No data</>
        )}
      </Box>
      <Box>
        <img
          src={
            selectedChip !== null ? touristPlaces[selectedChip].image : Homepage
          }
          alt="Homepage"
          style={{ height: "85vh", width: "100%", objectFit: "cover" }}
        />
      </Box>
      {selectedChip !== null && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: 900,
              backgroundColor: "whitesmoke",
              p: "5px",
              // position: "absolute",
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Stack spacing={2}>
                  <Typography variant="h3" gutterBottom>
                    {touristPlaces[selectedChip].name}
                  </Typography>
                  <Typography variant="h6">
                    {touristPlaces[selectedChip].description}
                  </Typography>
                </Stack>
                <Stack width="90%">
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                      boxShadow: "10px 0 5px -2px #888",
                    }}
                    p={1}
                    m={1}
                  >
                    <img src={Train} alt="Public transport" />
                    <Typography color="#D176E0">Public transport</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                      boxShadow: "10px 0 5px -2px #888",
                    }}
                    p={1}
                    m={1}
                  >
                    <img src={Nature} alt="Natural adventure" />
                    <Typography color="#7BBCB0">Natural Adventure</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    p={1}
                    m={1}
                    sx={{
                      boxShadow: "10px 0 5px -2px #888",
                    }}
                  >
                    <img src={privater} alt="Private transport" />
                    <Typography color={"#E4B613"}>Private Transport</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                      boxShadow: "10px 0 5px -2px #888",
                    }}
                    p={1}
                    m={1}
                  >
                    <img src={bussiness} alt="Business tour" />
                    <Typography color={"#FC3131"}>Business Tour</Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing={1}
                    sx={{
                      boxShadow: "10px 0 5px -2px #888",
                    }}
                    p={1}
                    m={1}
                  >
                    <img src={local} alt="Local visit" />
                    <Typography color={"#5C9BDE"}>Local Visit</Typography>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      )}
    </div>
  );
};

export default ChipGroup;
