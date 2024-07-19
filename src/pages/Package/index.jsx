import { Box, Divider, Grid, Rating, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import clock from "../../asset/svg/clock.svg";
import car from "../../asset/svg/car.svg";
import family from "../../asset/svg/family.svg";

const Index = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/v1/data/packages"
      );
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: "80px" }}>
        {data.map((country, countryIndex) => (
          <Grid item xs={12} key={countryIndex}>
            <Typography variant="h4">{country.countryName}</Typography>
            <Grid container spacing={2}>
              {country.packages.map((pkg, pkgIndex) => (
                <Grid item xs={12} sm={6} md={3} key={pkgIndex}>
                  {console.log("packages", pkg)}
                  <Stack
                    spacing={2}
                    boxShadow={3}
                    padding={2}
                    // textAlign="center"
                    sx={
                      {
                        // height: "100%",
                        // display: "flex",
                        // flexDirection: "column",
                        // alignItems: "center",
                      }
                    }
                  >
                    <Box sx={{ width: "100%", height: 200 }}>
                      <img
                        src={pkg.image}
                        alt="package"
                        style={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography variant="h5">{pkg.City}</Typography>
                      <Stack
                        flexDirection={"row"}
                        gap={1}
                        alignItems={"center"}
                        py={1}
                      >
                        <img src={clock} alt="" />
                        <Typography>{pkg.duration}</Typography>
                      </Stack>
                      <Stack
                        flexDirection={"row"}
                        gap={1}
                        alignItems={"center"}
                        py={1}
                      >
                        <img src={car} alt="" />
                        <Typography>{pkg.Transport}</Typography>
                      </Stack>
                      <Stack
                        flexDirection={"row"}
                        gap={1}
                        alignItems={"center"}
                        py={1}
                      >
                        <img src={family} alt="" />
                        <Typography>{pkg.family}</Typography>
                      </Stack>
                      <Divider />
                      <Stack direction={"row"} justifyContent={"space-between"}>
                        <Rating name="read-only" defaultValue={3} readOnly />
                        <Typography variant="h6">{pkg.price}</Typography>
                      </Stack>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        sx={{ color: "grey" }}
                      >
                        <Typography>{pkg.reviews}</Typography>
                        <Typography>{pkg.person}</Typography>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Index;
