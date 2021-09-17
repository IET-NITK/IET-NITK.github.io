import React from "react"
import XNavbar from "./partials/navbar"
import Footer from "./partials/footer"

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
      {/* <div
        className="clean-block add-on newsletter-sign-up blue"
        style={{backgroundColor:'#803391',padding:'30px 0px'}}
      >
        <h2>Join our Newsletter</h2>
        <input type="text" className="form-control" placeholder="Email" />
        <button className="btn btn-outline-light" type="button">
          Subscribe
        </button>
      </div> */}
      {showFooter ? (
        <div id="wrapper-footer">
          <Footer />
        </div>
      ) : null}
    </div>
  )
}

export default Layout
