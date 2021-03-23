import { Link, StaticQuery } from "gatsby"
import React from "react"
import Marquee from "react-simple-marquee"
import { graphql } from "gatsby"

const TopNavbar = ({ notice, permissions }) => {
  //eslint-disable-next-line
  const RenderMarquee = ({ notice }) => {
    if (notice.length === 1 && notice[0] === "") {
      return (
        <>
          <i className="fa fa-pin" />
          NITK Surathkal, Srinivasanagar, Karnataka
        </>
      )
    }
    return (
      <div className="alert alert-warning m-0">
        <Marquee
          speed={1} // Speed of the marquee (Optional)
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                notice && notice.join(" ".repeat(30 + 20 * notice.length)),
            }}
          />
        </Marquee>
      </div>
    )
  }
  return (
    <div id="topContent">
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 d-none d-lg-block">
              {/* <RenderMarquee notice={notice} /> */}
            </div>
            <div className="col-lg-4 d-lg-block text-right">
              <Link
                to="/recruitment"
                role="button"
                className="btn btn-dark btn-sm mr-3 disabled"
              >
                Join IET NITK
              </Link>
              {/* <Link
                to="/smp"
                role="button"
                className="btn btn-outline-primary btn-sm mr-3 disabled"
              >
                SMP {new Date().getFullYear()}
              </Link> */}
              <Link
                to="/expo"
                role="button"
                className={`btn btn-sm mr-3 ${permissions.expo.allow!==true? 'disabled':'btn-outline-primary'}`}
              >
                NITK Expo {new Date().getFullYear()}
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
            permissions: site {
              siteMetadata {
                expo {
                  allow
                }
                smp {
                  allow
                }
                join {
                  allow
                }
              }
            }
            imageSharp(fixed: { originalName: { eq: "logo-wide-1.png" } }) {
              fixed {
                srcWebp
              }
            }
          }
        `}
        render={({ sigdetails, site, imageSharp, permissions }) => (
          <div className="fixed-top" id="navbar">
            <TopNavbar notice={site.siteMetadata.noticeBoard} permissions={permissions.siteMetadata} />
            <nav
              className="navbar navbar-light navbar-expand-lg bg-white clean-navbar"
              style={{ borderBottom: "1px solid #c2c2c2" }}
            >
              <div className="container">
                <Link className="navbar-brand logo" to="/">
                  <img
                    src={imageSharp.fixed.srcWebp}
                    style={{ height: "auto", maxHeight: "2.5em" }}
                    alt="Institute of Engineering and Technology, NITK Surathkal Division"
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
                    <li className="nav-item" role="presentation">
                      <Link {...commonLinkProps} to="/events">
                        Events
                      </Link>
                    </li>
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
                                to={"/sigs/" + element.name.toLowerCase()}
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
