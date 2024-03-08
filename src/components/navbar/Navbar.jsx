import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import UserIcon from "../../assets/user-icon.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </div>
      {/* Hamburger Menu */}
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* Links */}
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/allblogs"}>Blogs</Link>
        </li>
        <li>
          <Link to={"/adminlogin"}>Login</Link>
        </li>
        <li>
          <Link to={"/dashboard"}>
            <div className="profile-pic">
              <img src={UserIcon} alt="" />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
