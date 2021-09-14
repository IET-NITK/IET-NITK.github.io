import { Link, StaticQuery } from "gatsby";
import React from "react";

import { graphql } from "gatsby";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
//eslint-disable-next-line
import Ticker from "react-ticker"
import { lcrs } from "../helper";

const TopNavbar = ({ notice, smp, recr, expo }) => {
  //eslint-disable-next-line

  return (
    <div id="topContent">
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-7 col-sm-12">
              {notice ? (
                <div
                  className="alert alert-warning m-0 text-center"
                  style={{ fontSize: "70%" }}
                >
                  {/* <Ticker mode="await" speed={4} id="message"> */}
                  {/* {({ index }) => ( */}
                  <ReactMarkdown className="mb-n3">{notice}</ReactMarkdown>

                  {/* )} */}
                  {/* </Ticker> */}
                </div>
              ) : null}
            </div>
            <div className="col-lg-3 col-md-5 col-sm-12 text-right mt-3 mt-md-0">
              <Link
                className={`btn btn-outline-primary btn-sm mr-3 ${
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
                  SMP {new Date().getFullYear()}
                </Link>
              ) : (
                <Link
                  className="btn btn-sm mr-3 btn-primary"
                  role="button"
                  to="/expo"
                >
                  NITK Expo {new Date().getFullYear()}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const XNavbar = (props) => {
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
        render={({
          sigdetails,
          site,
          imageSharp,
          smp_open,
          recr_open,
          expo_open,
          about,
        }) => (
          <div className="fixed-top" id="navbar">
            <TopNavbar
              expo={expo_open.open}
              notice={about.message}
              recr={recr_open.open}
              smp={smp_open.open}
            />
            <Navbar
              bg="white"
              className=" clean-navbar"
              expand="lg"
            >
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
                          href={`/sigs/${  lcrs(element.name)}`}
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
