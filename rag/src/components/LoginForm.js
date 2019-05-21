import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import BeTheChange from "../assets/rag_pic_change.png";
import "../styles/login.css";

function LoginForm(props) {
  return (
    <div>
      <Nav isLoggedIn={false} />
      <div className="body-container">
        <section className="left-section">
          <img
            className="left-image-text"
            src={BeTheChange}
            alt="Be The Change"
          />
        </section>
        <section className="right-section">
          <div className="right-section-container-login">
            <div className="form-text">Email</div>
            <div className="form-element">
              <input className="form-input" type="text" />
            </div>
            <div className="form-text">Password</div>
            <div className="form-element">
              <input className="form-input" type="password" />
              <button className="login-btn">Start Changing</button>
            </div>
          </div>
        </section>
      </div>
      <div className="login-filler" />
      <Footer />
    </div>
  );
}
export default LoginForm;
