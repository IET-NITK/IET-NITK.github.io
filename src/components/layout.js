import React from "react"
import { Link } from "gatsby"
import Navbar from "./partials/navbar"
import Footer from "./partials/footer"

const Layout = ({ location, title, children }) => {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: `${location==='/'?'0em':'3em'}` }} />
      {children}
      <div
        className="clean-block add-on newsletter-sign-up blue"
        style={{backgroundColor:'#803391',padding:'30px 0px'}}
      >
        <h2>Join our Newsletter</h2>
        <input type="text" className="form-control" placeholder="Email" />
        <button className="btn btn-outline-light" type="button">
          Subscribe
        </button>
      </div>
      <Footer />
    </>
  )
}

export default Layout
