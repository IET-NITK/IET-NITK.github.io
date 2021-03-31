import { Link, StaticQuery } from "gatsby"
import React from "react"
import Marquee from "react-simple-marquee"
import { graphql } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"

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
                className={`btn btn-outline-primary btn-sm mr-3 ${permissions.join.allow!==true ? 'disabled':''}`}
              >
                Join IET NITK
              </Link>
 
              {permissions.expo.allow !== true ? (
                <Link
                  to="/smp"
                  role="button"
                  className={`btn btn-primary btn-sm mr-3 ${permissions.smp.allow!==true ? 'disabled':''}`}
                >
                  SMP {new Date().getFullYear()}
                </Link>
              ) : (
                <Link
                  to="/expo"
                  role="button"
                  className="btn btn-sm mr-3 btn-primary"
                >
                  NITK Expo {new Date().getFullYear()}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export const XNavbar = props => {
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
            <TopNavbar
              notice={site.siteMetadata.noticeBoard}
              permissions={permissions.siteMetadata}
            />
            <Navbar
              bg="white"
              expand="lg"
              className=" clean-navbar"
              style={{ borderBottom: "1px solid #c2c2c2" }}
            >
              <div className="container">
                <Navbar.Brand className="navbar-brand logo" href="/">
                  <img
                    src={imageSharp.fixed.srcWebp}
                    style={{ height: "auto", maxHeight: "2.5em" }}
                    alt="Institute of Engineering and Technology, NITK Surathkal Division"
                  />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link className="nav-link" href="/">
                      Home
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="/about">
                      About Us
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="/events">
                      Events
                    </Nav.Link>
                    <Nav.Link className="nav-link" href="/blog">
                      Blog
                    </Nav.Link>
                    <NavDropdown title="SIGs">
                      {sigdetails.nodes.map((element, index) => (
                        // <li key={index}>
                        //   <Link
                        //     className="nav-link pl-2 dropdown-item"
                        //     to={"/sigs/" + element.name.toLowerCase()}
                        //   >
                        //     {element.name}
                        //   </Link>
                        <NavDropdown.Item
                          className="nav-link"
                          href={"/sigs/" + element.name.toLowerCase()}
                        >
                          {element.name}
                        </NavDropdown.Item>
                      ))}
                    </NavDropdown>
                    <Nav.Link className="nav-link" href="/contact">
                      Contact Us
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </Navbar>
          </div>
        )}
      ></StaticQuery>
    </>
  )
}

export default XNavbar
