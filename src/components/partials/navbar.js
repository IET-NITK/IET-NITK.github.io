import { Link } from "gatsby"
import React from "react"

const TopNavbar = props => {
  return (
    <div className="fixed-top" id="navbar">
      <div id="topContent">
        <div className="py-2 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-8 d-none d-lg-block">
                <a href="/contact.html" className="small mr-3">
                  <span className="icon-question-circle-o mr-2"></span>
                  Any questions?
                </a>
              </div>
              <div className="col-lg-4 d-lg-block text-right">
                <a
                  href="/recruitments"
                  role="button"
                  disabled
                  className="btn btn-primary mr-3"
                >
                  Join IET NITK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Navbar = props => {
  return (
    <>
      <div class="fixed-top" id="navbar">
        {/* <TopNavbar /> */}
        <nav
          className="navbar navbar-light navbar-expand-lg bg-white clean-navbar"
          style={{borderBottom:"1px solid #c2c2c2"}}
        >
          <div className="container">
            <a className="navbar-brand logo" href="/">
              <img
                src="/assets/img/logo.png"
                style={{height:"auto",maxWidth:"4em"}}
              />
            </a>
            <button
              data-toggle="collapse"
              className="navbar-toggler"
              data-target="#navcol-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span
                className="navbar-toggler-icon"
                style={{ margin: "0px" }}
              ></span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="nav navbar-nav ml-auto">
                <li className="nav-item" role="presentation">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link " to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link " to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="dropdown-toggle nav-link"
                    data-toggle="dropdown"
                    aria-expanded="false"
                    href="/"
                  >
                    SIGs
                  </a>
                  <div className="dropdown-menu" role="menu">
                    <Link
                      className="dropdown-item"
                      role="presentation"
                      to="/sig/cipher"
                    >
                      Cipher
                    </Link>
                  </div>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link " to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
