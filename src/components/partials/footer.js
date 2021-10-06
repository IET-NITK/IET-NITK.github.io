import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { lcrs } from "../helper";
import TransitionLink from "gatsby-plugin-transition-link"

export const Footer = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            buildTime(formatString: "MMMM Do, YYYY")
          }
          about: strapiAboutClub {
            footer
          }
          sigs: allStrapiSigs(filter: {}, sort: { fields: no_link }) {
            nodes {
              name
              no_link
            }
          }
        }
      `}
      render={({ site, about, sigs }) => (
        <div
          className="footer-dark"
          style={{
            backgroundColor: "rgba(42, 42, 46, 1)",
            color: "white",
            padding: "1.5em 0em",
            paddingBottom: "0",
          }}
        >
          <footer>
            <div className="container">
              <div className="row mb-3">
                <div className="col-sm-6 col-md-3 item">
                  <h3 className="mt-4 mb-3">Important Links</h3>
                  <ul className="footer-list">
                    <li>
                      <TransitionLink to="/">Home</TransitionLink>
                    </li>
                    <li>
                      <TransitionLink to="/about">About Us</TransitionLink>
                    </li>
                    <li>
                      <TransitionLink to="/events">Events</TransitionLink>
                    </li>
                    <li>
                      <TransitionLink to="/projects">Projects</TransitionLink>
                    </li>
                    <li>
                      <TransitionLink to="/project-reports">Project Reports</TransitionLink>
                    </li>
                    <li>
                      <TransitionLink to="/blog">Blog</TransitionLink>
                    </li>
                    <li>
                      <TransitionLink to="/contact">Say Hi!</TransitionLink>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3 className="mt-4 mb-3">Special Interest Groups</h3>
                  <ul className="footer-list">
                    {sigs.nodes.map((sig, index) => (
                      <li key={index}>
                        {sig.no_link === true ? (
                          sig.name
                        ) : (
                          <TransitionLink to={`/sigs/${lcrs(sig.name)}`}>
                            {sig.name}
                          </TransitionLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6 item text">
                  <div className="mobile-center-laptop-right">
                    <h3 className="mt-4 mb-3">IET NITK</h3>
                    <p className="footer-list">{about.footer}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-0 bottom-footer">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 copyright mobile-center-laptop-left">
                    <i className="fa fa-heart heartbeat" /> &nbsp; IET NITK
                    |&nbsp;
                    <OutboundLink
                      className="text-white"
                      href="https://github.com/IET-NITK/IET-NITK.github.io#contributors"
                      rel="noreferrer"
                      target="_blank"
                    >
                      Made by IET NITK Web Team
                    </OutboundLink>
                    <br />
                    Last updated on: {site.buildTime}
                  </div>
                  <div className="col-md-6 item social mobile-center-laptop-right">
                    <OutboundLink
                      href="https://www.facebook.com/ietnitk"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-facebook" />
                    </OutboundLink>
                    <OutboundLink
                      href="https://www.linkedin.com/company/ietnitk/"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                    </OutboundLink>
                    <OutboundLink
                      href="https://www.github.com/IET-NITK"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                    </OutboundLink>
                    <OutboundLink
                      href="https://t.me/IET_NITK"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-telegram" />
                    </OutboundLink>
                    <OutboundLink
                      href="https://www.youtube.com/c/IETNITK"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-youtube" />
                    </OutboundLink>
                    <OutboundLink
                      href="https://www.instagram.com/ietnitk"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-instagram" />
                    </OutboundLink>
                    <OutboundLink
                      href="/feed.xml"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-rss" />
                    </OutboundLink>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      )}
    />
  );
};

export default Footer;
