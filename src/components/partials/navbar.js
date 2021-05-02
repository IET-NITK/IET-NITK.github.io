import { Link, StaticQuery } from "gatsby"
import React from "react"

import { graphql } from "gatsby"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import ReactMarkdown from "react-markdown"
import Ticker from "react-ticker"

// eslint-disable-next-line
const RenderMarquee = ({ notice }) => {
  if (notice.length === 1 && notice[0] === "") {
    return (
      <small className="text-muted">
        <i className="fa fa-map-marker mr-2" />
        Srinivasnagar, Surathkal, Mangalore, Karnataka 575025
      </small>
    )
  }

  return (
    <div className="alert alert-warning m-0" style={{ fontSize: "70%" }}>
      <Ticker mode="await" speed={5} id="message">
        {({ index }) => (
          <ReactMarkdown className="mb-n3">{notice[0]}</ReactMarkdown>
        )}
      </Ticker>
    </div>
  )
}

const TopNavbar = ({ notice, smp, recr, expo }) => {
  //eslint-disable-next-line

  return (
    <div id="topContent">
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-7 col-sm-12">
              {/* <RenderMarquee notice={notice} /> */}
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12 text-right mt-3 mt-md-0">
              <Link
                to="/recruitment"
                role="button"
                className={`btn btn-outline-primary btn-sm mr-3 ${
                  recr !== true ? "disabled" : ""
                }`}
              >
                Join IET NITK
              </Link>

              {expo !== true ? (
                <Link
                  to="/smp"
                  role="button"
                  className={`btn btn-primary btn-sm mr-3 ${
                    smp !== true ? "disabled" : ""
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
            site {
              siteMetadata {
                noticeBoard
              }
            }
            imageSharp(fixed: { originalName: { eq: "logo-wide-1.png" } }) {
              fixed {
                srcWebp
              }
            }
            smp_open: strapiSummerPrograms {
              open
            }
            recr_open: strapiRecruitmentFaq {
              open
            }
            expo_open: strapiExpo {
              open
            }
            sigdetails: allStrapiSigs(filter: { no_link: { eq: false } }) {
              nodes {
                name
              }
            }
          }
        `}
        render={({ sigdetails, site, imageSharp, smp_open, recr_open, expo_open }) => (
          <div className="fixed-top" id="navbar">
            <TopNavbar
              notice={site.siteMetadata.noticeBoard}
              smp={smp_open.open}
              recr={recr_open.open}
              expo={expo_open.open}
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
                    <Nav.Link className="nav-link" href="/projects">
                      Projects
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
