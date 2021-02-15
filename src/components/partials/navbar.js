import { Link, StaticQuery } from "gatsby"
import React from "react"
// import Marquee from "react-simple-marquee"
import { graphql } from "gatsby"

const TopNavbar = ({ notice }) => {
  return (
    <div id="topContent">
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 d-none d-lg-block">
              {/* {() => {
                if (notice.length === 1 || notice[0] === "") {
                  console.log("RET")
                  return(
                    <>NITK Surathkal</>
                  )
                }
                return (
                  <div className="alert alert-warning m-0">
                    <Marquee
                      speed={1} // Speed of the marquee (Optional)
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: notice.join("\u00A0".repeat(30)),
                        }}
                      />
                    </Marquee>
                  </div>
                )
              }} */}
            </div>
            <div className="col-lg-3 d-lg-block text-right">
              <Link
                to="/recruitment"
                role="button"
                className="btn btn-primary btn-sm mr-3 disabled"
              >
                Join IET NITK
              </Link>
              <Link
                to="/smp"
                role="button"
                className="btn btn-outline-primary btn-sm mr-3 disabled"
              >
                SMP {new Date().getFullYear()}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const Navbar = props => {
  const commonLinkProps = {
    className: "nav-link",
    activeClassName: "active",
  }
  return (
    <>
      <StaticQuery
        query={graphql`
          query {
            sigdetails: allSigYaml(filter: { no_link: { ne: true } }) {
              nodes {
                name
              }
            }
            site {
              siteMetadata {
                noticeBoard
              }
            }
            imageSharp(fixed: { originalName: { eq: "logo-wide.png" } }) {
              fixed {
                srcWebp
              }
            }
          }
        `}
        render={({ sigdetails, site, imageSharp }) => (
          <div className="fixed-top" id="navbar">
            <TopNavbar notices={site.siteMetadata.noticeBoard} />
            <nav
              className="navbar navbar-light navbar-expand-lg bg-white clean-navbar"
              style={{ borderBottom: "1px solid #c2c2c2" }}
            >
              <div className="container">
                <Link className="navbar-brand logo" to="/">
                  <img
                    src={imageSharp.fixed.srcWebp}
                    style={{ height: "auto", maxHeight: "2em" }}
                    alt=""
                  />
                </Link>
                <button
                  data-toggle="collapse"
                  className="navbar-toggler"
                  data-target="#navcol-1"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span
                    className="navbar-toggler-icon"
                    style={{ margin: "0px" }}
                  />
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                  <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item" role="presentation">
                      <Link to="/" {...commonLinkProps}>
                        Home
                      </Link>
                    </li>
                    <li className="nav-item" role="presentation">
                      <Link {...commonLinkProps} to="/about">
                        About Us
                      </Link>
                    </li>
                    {/* <li className="nav-item" role="presentation">
                  <Link {...commonLinkProps} to="/events">
                    Events
                  </Link>
                </li> */}
                    <li className="nav-item" role="presentation">
                      <Link {...commonLinkProps} to="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item dropdown">
                      <div className="dropdown">
                        <Link
                          className="nav-link dropdown-toggle"
                          data-toggle="dropdown"
                          to="#"
                          activeClassName="active"
                        >
                          SIGS
                        </Link>
                        <ul className="dropdown-menu">
                          {sigdetails.nodes.map((element, index) => (
                            <li key={index}>
                              <Link
                                className="nav-link pl-2 dropdown-item"
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
                      <Link {...commonLinkProps} to="/contact">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        )}
      ></StaticQuery>
    </>
  )
}

export default Navbar
