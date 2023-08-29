import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="jaiswalshivani708@gmail.com">jaiswalshivani708@gmail.com</a>
        {/* <span>jaiswalshivani708@gmail.com</span> */}
        <div className="f-icons">
          <a href="https://github.com/SHIVani-708">
          <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/shivani-jaiswal-47901b1b2/">
          <Insta color="white" size={"3rem"} />
          </a>
          <a href="https://m.facebook.com/profile.php/?id=100043579470871">
          <Facebook color="white" size={"3rem"} />
          </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
