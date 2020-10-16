import { Link } from "gatsby"
import React from "react"
import IETLOGO from "./../../assets/img/logo.png"
import sigs from "../../../content/yml/sig.yml"

const TopNavbar = props => {
  return (
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
  )
}
export const Navbar = props => {
  let sigArray = sigs.filter(element => !element.no_link)
  return (
    <>
      <div className="fixed-top" id="navbar">
        <TopNavbar />
        <nav
          className="navbar navbar-light navbar-expand-lg bg-white clean-navbar"
          style={{ borderBottom: "1px solid #c2c2c2" }}
        >
          <div className="container">
            <a className="navbar-brand logo" href="/">
              <img src={IETLOGO} style={{ height: "auto", maxWidth: "4em" }} />
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
                  <div className="dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      href="#"
                    >
                      SIGS
                    </a>
                    <ul
                      className="dropdown-menu"
                      role="menu"
                      aria-labelledby="dLabel"
                    >
                      {sigArray.map((element, index) => (
                        <li key={index}>
                          <Link
                            className="dropdown-item"
                            to={"/sig/" + element.name.toLowerCase()}
                          >
                            {element.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
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
