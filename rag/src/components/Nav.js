import React from "react";
import "../styles/nav.css";
import logo from "../assets/rag_pic_logo1xJustHelp.png";
import { logout } from "../actions";
import { connect } from "react-redux";

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
              <div className="nav-link">Contacts</div>
              <div className="nav-link">Kind Acts</div>
              <div className="nav-link">Profile</div>
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
