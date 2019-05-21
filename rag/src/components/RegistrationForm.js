import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import SayHello from "../assets/rag_pic_groupregister1x.png";
import Kindness from "../assets/rag_pic_kindness1x.png";
import TitlePic from "../assets/rag_pic_livealife.jpeg";
import "../styles/login.css";

function RegistrationForm(props) {
  return (
    <div>
      <Nav isLoggedIn={false} />
      <div className="body-container">
        <section className="left-section">
          <img className="left-image" src={SayHello} alt="Say Hello" />
          <img className="left-image-text" src={Kindness} alt="Kindness" />
          <img className="left-image" src={TitlePic} alt="Title picture" />
        </section>
        <section className="right-section">
          <div className="right-section-container-register">
            <div className="form-text-register">First Name</div>
            <div className="form-element">
              <input className="form-input-register" type="text" />
            </div>
            <div className="form-text-register">Last Name</div>
            <div className="form-element">
              <input className="form-input-register" type="text" />
            </div>
            <div className="form-text-register">Email</div>
            <div className="form-element">
              <input className="form-input-register" type="text" />
            </div>
            <div className="form-text-register">Phone Number</div>
            <div className="form-element">
              <input className="form-input-register" type="text" />
            </div>
            <div className="form-text-register">Password</div>
            <div className="form-element">
              <input className="form-input-register" type="password" />
              <button className="login-btn">Join Now</button>
            </div>
          </div>
        </section>
      </div>
      <div className="login-filler" />
      <Footer />
    </div>
  );
}
export default RegistrationForm;
