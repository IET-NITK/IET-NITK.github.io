import { Link, StaticQuery } from "gatsby"
import React from "react"
import Marquee from "react-simple-marquee"
import { graphql } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import ReactMarkdown from "react-markdown"

const RenderMarquee = ({ notice }) => {
  if (notice.length===1 && notice[0] === "") {
    return (
      <>
        <i className="fa fa-pin" />
        NITK Surathkal, Srinivasanagar, Karnataka
      </>
    )
  }
  console.log(notice.join(" ".repeat(30 + 20 * notice.length)))
  return (
    <div className="alert alert-warning m-0" style={{fontSize:'70%'}}>
      <Marquee
      speed={1}
      id="message"
      >
        <ReactMarkdown className="mb-n4">{notice.join(" ".repeat(30 + 20 * notice.length))}</ReactMarkdown>
      </Marquee>
    </div>
  )
}

const TopNavbar = ({ notice, permissions }) => {
  //eslint-disable-next-line

  return (
    <div id="topContent">
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-7 col-sm-12">
              <RenderMarquee notice={notice} />
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12 text-right mt-3 mt-md-0">
              <Link
                to="/recruitment"
                role="button"
                className={`btn btn-outline-primary btn-sm mr-3 ${
                  permissions.join.allow !== true ? "disabled" : ""
                }`}
              >
                Join IET NITK
              </Link>

              {permissions.expo.allow !== true ? (
                <Link
                  to="/smp"
                  role="button"
                  className={`btn btn-primary btn-sm mr-3 ${
                    permissions.smp.allow !== true ? "disabled" : ""
                  }`}
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
                        <NavDropdown.Item
                          className="nav-link"
                          key={index}
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
