import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <h1>{children}</h1>
      <Footer />
    </div>
  );
};

export default Layout;
