import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/reactjs-removebg-preview.png";
import Fiverr from "../../img/expressjs-removebg-preview.png";
import Amazon from "../../img/nodejs-removebg-preview.png";
import Shopify from "../../img/mongodb-removebg-preview.png";
import Facebook from "../../img/wp.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked on All these
          </span>
          <span>Technologies</span>
          <spane>
            <li>
              Proficient in JavaScript, ReactJS, and ExpressJS, with a strong <br />
              foundation in building dynamic and responsive web applications.{" "}
              <br />
            </li>
            <li>
              Skilled in utilizing MongoDB for efficient data management <br /> and
              integration in projects. <br />
            </li>
            <li>
              Experienced in developing and maintaining Node.js <br /> applications,
              ensuring seamless back-end functionality.
              <br />
            </li>
            <li>
              Knowledgeable in WordPress customization, <br /> creating tailored themes
              and plugins to meet specific <br /> design and functionality needs.{" "}
              <br />
            </li>
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
