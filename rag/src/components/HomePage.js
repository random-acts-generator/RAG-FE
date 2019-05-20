import React from "react";
import Nav from "./Nav";

function HomePage(props) {
  return (
    <div>
      <Nav />
      <div className="home-page-circle1" />
      <div className="home-page-circle2" />
      <div className="home-page-circle3" />
    </div>
  );
}

export default HomePage;
