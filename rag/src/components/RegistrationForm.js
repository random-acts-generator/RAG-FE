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
          <div className="right-section-container">
            <div className="right-section-content">
              Organize and clean the pantry
            </div>
            <div className="right-section-content">for Thomas Cook</div>
          </div>
          <div className="generate-btn">Generate a new act of kindness</div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default RegistrationForm;
