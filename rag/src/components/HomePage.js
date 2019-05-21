import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import LeftImage from "../assets/rag_pic_firework.jpeg";

function HomePage(props) {
  return (
    <div>
      <Nav isLoggedIn={true} />
      <div className="body-container">
        <section className="left-section">
          <img className="left-image" src={LeftImage} alt="Fireworks" />
        </section>
        <section className="right-section">
          <div>
            <div className="right-section-content">
              Organize and clean the pantry
            </div>
            <div className="right-section-content">for Thomas Cook</div>
          </div>
          <div className="generate-btn">Generate a new act of kindness</div>
        </section>
      </div>
      <div className="login-filler" />
      <Footer />
    </div>
  );
}

export default HomePage;
