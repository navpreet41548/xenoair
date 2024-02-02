import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      <Footer />
      {/* <Script src="/js/main.js"></Script> */}
    </React.Fragment>
  );
};

export default Layout;
