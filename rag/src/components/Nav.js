import React from "react";
import "../styles/nav.css";
import logo from "../assets/rag_pic_logo1xJustHelp.png";

function Nav(props) {
  return (
    <div>
      <div className="nav-container">
        <div className="brand-logo">
          <img className="logo" src={logo} alt="Brand logo" />
        </div>
        {props.isLoggedIn && (
          <div className="nav-links">
            <div className="nav-link">Contacts</div>
            <div className="nav-link">Kind Acts</div>
            <div className="nav-link">Profile</div>
          </div>
        )}
      </div>
      <div className="home-page-circle1" />
      <div className="home-page-circle2" />
      <div className="home-page-circle3" />
      <div className="divider" />
    </div>
  );
}

export default Nav;
