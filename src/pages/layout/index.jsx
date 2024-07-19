import React from "react";

import Navbar from "../Navbar";
import Home from "../Home";
import About from "../About-us";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  );
};

export default Layout;
