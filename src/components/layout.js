import React from "react"
import XNavbar from "./partials/navbar"
import Footer from "./partials/footer"
import MyChatBot from "./partials/chatbot"


const Layout = ({ location, title, children }) => {
  return (
    <div className="site">
      <div id="wrapper-navbar">
        <XNavbar />
      </div>
      <div style={{ paddingTop: `${location === "/" ? "0em" : "3em"}` }} />
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
      <div name = "chatbot">
      <MyChatBot />
      </div>
      <div id="wrapper-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Layout
