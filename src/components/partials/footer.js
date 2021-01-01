import React from "react"
import { Link } from "gatsby"
import SIG from "../../../content/yml/sig.yml"

export const Footer = props => {
  return (
    <>
      <div
        className="footer-dark"
        style={{
          backgroundColor: "#2d3e50",
          color: "white",
          padding: "1.5em 0em",
        }}
      >
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3 item">
                <h3>Important Links</h3>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/about#family">Our Family</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/contact">Say Hi!</Link>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6 col-md-3 item">
                <h3>Special Interest Groups</h3>
                <ul>
                  {SIG.map((e, i) =>
                    <li key={i}>{e.no_link === true ? e.name: <Link to={`/sig/${e.name.toLowerCase()}`}>{e.name}</Link>}</li>
                  )}
                </ul>
              </div>
              <div className="col-md-6 item text">
                <div className="mobile-center-laptop-right">
                  <h3>IET NITK</h3>
                  <p>
                    To inspire, inform and influence the global engineering
                    community, supporting technology innovation to meet the
                    needs of society. We are IET NITK.
                  </p>
                </div>
              </div>
              <div className="col item social">
                <a href="https://www.facebook.com/ietnitk">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/ietnitk/">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="https://www.github.com/IET-NITK">
                  <i className="fa fa-github"></i>
                </a>
                <a href="https://www.instagram.com/ietnitk">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/feed.xml">
                  <i className="fa fa-rss"></i>
                </a>
              </div>
            </div>
            <p className="copyright">
              <i className="fa fa-heart heartbeat" /> &nbsp; IET NITK |
              <a className="text-white" href="/">
                Made by IET NITK Web Team
              </a>
              <br />
              Last updated on: August 31
            </p>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Footer
