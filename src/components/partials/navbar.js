import { Link, StaticQuery, graphql } from "gatsby";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import ReactMarkdown from "react-markdown";
// import Ticker from "react-ticker";
//eslint-disable-next-line
import { lcrs } from "../helper"

const TopNavbar = ({ smp, recr, expo }) => {
  //eslint-disable-next-line

  return (
    <div id="topContent">
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7 col-sm-12">
              {/* {notice ? (
                <div
                  className="alert alert-warning m-0 text-center"
                  style={{ fontSize: "70%" }}
                >
                  <Ticker mode="await" speed={5} id="message">
                    {({ index }) => (
                      <>
                      <ReactMarkdown className="mb-n3">{notice+"\t"+"hey"}</ReactMarkdown>
                      </>
                    )}
                  </Ticker>
                </div>
              ) : null} */}
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 text-right mt-3 mt-md-0">
              <Link
                className={`btn btn-primary btn-sm mr-3 ${
                  recr !== true ? "disabled" : ""
                }`}
                role="button"
                to="/recruitment"
              >
                Join IET NITK
              </Link>

              {expo !== true ? (
                <Link
                  className={`btn btn-primary btn-sm mr-3 ${
                    smp !== true ? "disabled" : ""
                  }`}
                  role="button"
                  to="/smp"
                >
                  <i className="fa fa-chalkboard"/> SMP {new Date().getFullYear()}
                </Link>
              ) : (
                <Link
                  className="btn btn-sm mr-3 btn-primary"
                  role="button"
                  to="/expo"
                >
                <i className="fa pt-0 mr-2 fa-calendar"/>  NITK Expo {new Date().getFullYear()}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const XNavbar = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          about: strapiAboutClub {
            message: topnavbar_marquee
          }

          imageSharp(fixed: { originalName: { eq: "logo-wide-1.png" } }) {
            fixed {
              srcWebp
            }
          }
          smpOpen: strapiSummerPrograms {
            open
          }
          recruitmentOpen: strapiRecruitmentFaq {
            open
          }
          expoOpen: strapiExpo {
            open
          }
          sigdetails: allStrapiSigs(filter: { no_link: { eq: false } }) {
            nodes {
              name
            }
          }
        }
      `}
      render={({
        sigdetails,
        imageSharp,
        smpOpen,
        recruitmentOpen,
        expoOpen,
      }) => (
        <div className="fixed-top" id="navbar">
          <TopNavbar
            expo={expoOpen.open}
            notice={"Our recruitment forms are open, please find them here."}
            recr={recruitmentOpen.open}
            smp={smpOpen.open}
          />
          <Navbar bg="white" className=" clean-navbar" expand="lg">
            <div className="container">
              <Navbar.Brand className="navbar-brand logo" href="/">
                <img
                  alt="Institute of Engineering and Technology, NITK Surathkal Division"
                  src={imageSharp.fixed.srcWebp}
                  style={{ height: "auto", maxHeight: "2.5em" }}
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
                        href={`/sigs/${lcrs(element.name)}`}
                        key={index}
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
    />
  );
};

export default XNavbar;
