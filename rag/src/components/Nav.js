import React from "react";
import "../styles/nav.css";
import logo from "../assets/rag_pic_logo1xJustHelp.png";
import { logout } from "../actions";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
  onLogout = e => {
    e.preventDefault();
    this.props.logout();
  };

  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="brand-logo">
            <img className="logo" src={logo} alt="Brand logo" />
          </div>
          {this.props.isLoggedIn && (
            <div className="nav-links">
              <NavLink to="/profile" className="nav-link">
                Contacts
              </NavLink>
              <NavLink to="/profile" className="nav-link">
                Kind Acts
              </NavLink>
              <NavLink to="/profile" className="nav-link">
                Profile
              </NavLink>
              <div className="nav-link" onClick={this.onLogout}>
                Logout
              </div>
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
}

export default connect(
  null,
  { logout }
)(Nav);
