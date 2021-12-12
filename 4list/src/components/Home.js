import React, { useState } from "react";
import Navbar from "./Navbar";
import Navigation from "./navigation/Navigation";

const Home = () => {
  //changes the title of the page
  if (document.getElementById("pageTitle")) {
    document.getElementById("pageTitle").innerHTML = "4List - Home Page";
  }
  return (
    <div>
      {/* <Navigation/> */}
      {/* <Navbar/> */}
    </div>
  );
};

export default Home;
