import React from "react";
import XNavbar from "../../elements/navbar/navbar";
import Footer from "../../elements/footer/footer";
import * as styles from "./main.module.css";

const Layout = ({ location, children, showFooter = true }) => {
  return (
    <div className={styles.site}>
      <div id="wrapper-navbar">
        <XNavbar />
      </div>
      {showFooter ? (
        <div style={{ paddingTop: `${location === "/" ? "0em" : "3em"}` }} />
      ) : null}
      <div className={styles.site_content}>{children}</div>
      {showFooter ? (
        <div id="wrapper-footer">
          <Footer />
        </div>
      ) : null}
    </div>
  );
};

export default Layout;
