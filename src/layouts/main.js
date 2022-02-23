import React from "react";
import XNavbar from "../elements/navbar";
import Footer from "../elements/footer";

const Layout = ({ location, children, showFooter = true }) => {
  return (
    <div className="site">
      <div id="wrapper-navbar">
        <XNavbar />
      </div>
      {showFooter ? (
        <div style={{ paddingTop: `${location === "/" ? "0em" : "3em"}` }} />
      ) : null}
      <div className="site-content">{children}</div>
      {showFooter ? (
        <div id="wrapper-footer">
          <Footer />
        </div>
      ) : null}
    </div>
  );
};

export default Layout;
