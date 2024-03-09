import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className="content">{children}</div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
