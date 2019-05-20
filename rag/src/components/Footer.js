import React from "react";
import "../styles/footer.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <div className="footer-left">
        <div>About</div>
        <div>Contact Us</div>
      </div>
      <div className="footer-right">Powered by LambdaBW</div>
    </div>
  );
}
export default Footer;
