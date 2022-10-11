import { Link, StaticQuery, graphql } from "gatsby";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
// import ReactMarkdown from "react-markdown";
// import Ticker from "react-ticker";
//eslint-disable-next-line
import * as style from "./navbar.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const TopNavbar = ({ smp, recr, expo, notice }) => {
  //eslint-disable-next-line

  return (
    <div id="topContent">
      <div className="py-2 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-7 col-sm-12">
              {notice ? (
                <div
                  className="alert alert-warning m-0"
                  style={{ fontSize: "70%" }}
                >
                  {/* <Ticker speed={5}>
                    {({ index }) => (
                      <>
                        <ReactMarkdown className="mb-n3">
                          {notice+"\t".repeat(10)}
                        </ReactMarkdown>
                        {"\t".repeat(10)}
                      </>
                    )}
                  </Ticker> */}
                  <ReactMarkdown className="mb-n3" 
                remarkPlugins={[remarkGfm]}>
                    {notice + "\t".repeat(10)}
                  </ReactMarkdown>
                </div>
              ) : null}
            </div>
            <div className="col-lg-4 col-md-5 col-sm-12 text-right mt-3 mt-md-0">
              <Link
                className={`btn btn-sm mr-3  ${
                  recr !== true ? "btn-primary disabled" : style.glowing
                }`}
                role="button"
                to="https://tripetto.app/run/I4PBVJZTBP"
              >
                Join IET NITK
              </Link>


              {expo !== true ? (
                <Link
                  className={`btn btn-sm mr-3 ${
                    smp !== true ? "btn-primary disabled" : style.glowing
                  }`}
                  role="button"
                  to="https://tripetto.app/run/C7NE4FSLTW"
                >
                  <i className="fa fa-chalkboard" /> GameShow{" "}
               
                  {/* <i className="fa fa-chalkboard" /> SMP{" "}
                  {new Date().getFullYear()} */}
                </Link>
              ) : (
                <Link
                  className={`btn btn-sm mr-3  ${style.glowing}`}
                  role="button"
                  to="/expo"
                >
                  <i className="fa pt-0 mr-2 fa-edge" /> IET Expo{" "}
                  {new Date().getFullYear()}
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
      render={({ smpOpen, recruitmentOpen, about, expoOpen }) => (
        <div className="fixed-top" id="navbar">
          <TopNavbar
            expo={expoOpen.open}
            notice={about.message}
            recr={recruitmentOpen.open}
            smp={smpOpen.open}
          />
          <Navbar bg="white" className=" clean-navbar" expand="lg">
            <div className="container">
              <Navbar.Brand className="navbar-brand logo" href="/">
                <StaticImage
                  alt="Institute of Engineering and Technology, NITK Surathkal Division"
                  placeholder="blurred"
                  src="../../assets/img/logo-wide-1.png"
                  width="63"
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
                  <NavDropdown title="SIGs">
                    {["Cipher", "Rovisp", "Torsion", "Venture"].map((sig) => (
                      <NavDropdown.Item className="nav-link" href={`/sig/${sig.toLowerCase()}`} key={sig}>
                        {sig}
                      </NavDropdown.Item>
                    ))}
                    <NavDropdown.Item
                      className="nav-link"
                      href="https://ietinkheartblog.wordpress.com/"
                    >
                      Inkheart
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="nav-link" href="/events">
                    Events
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="/projects">
                    Projects
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="/blog">
                    Blog
                  </Nav.Link>
                  <Nav.Link className="nav-link" href="/wit">
                    WIT
                  </Nav.Link>
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
