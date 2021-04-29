import React from "react"
import XNavbar from "./partials/navbar"
import Footer from "./partials/footer"

const Layout = ({ location, title, children }) => {
  return (
    <div className="site">
      <div id="wrapper-navbar">
        <XNavbar />
      </div>
      <div style={{ paddingTop: `${location === "/" ? "0em" : "3em"}` }} />
      <div className="site-content">{children}</div>
      <div id="wrapper-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
