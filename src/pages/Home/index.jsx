import { Box, Typography } from "@mui/material";
import React from "react";
import "../Home/style.css";

import HomeVideo from "../../asset/vidio/beachvidio.mp4";

const Index = () => {
  return (
    <div className="home-container">
      <section className="home-main">
        <div className="vidio-container">
          <video
            src={HomeVideo}
            className="home-video"
            autoPlay
            loop
            muted
            playsInline
          />
          <Box className="home-text-container">
            <Typography variant="h2" className="home-title">
              We Find The Best Tours For You
            </Typography>
            <Typography className="home-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Typography>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Index;
