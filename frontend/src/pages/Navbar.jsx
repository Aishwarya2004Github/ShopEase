import React from "react";
import Logo from "../../../uploads/Logo.png"; // Adjust the path to your logo file
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={Logo} alt="ShopEase Logo" className="logo" />
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
