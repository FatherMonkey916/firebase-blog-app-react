import React from "react";
import "./Footer.css";
import Logo from "../../assets/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <p>&copy; 2024 BlogOps</p>
        <div class="social-icons">
          <ul>
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaLinkedinIn />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
