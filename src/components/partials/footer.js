import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"

export const Footer = props => {
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
            backgroundColor: "#2d3e50",
            color: "white",
            padding: "1.5em 0em",
          }}
        >
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-6 col-md-3 item">
                  <h3 className="mt-4 mb-3">Important Links</h3>
                  <ul className="footer-list">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About Us</Link>
                    </li>
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    <li>
                      <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                      <Link to="/project-reports">Project Reports</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Say Hi!</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                  <h3 className="mt-4 mb-3">Special Interest Groups</h3>
                  <ul className="footer-list">
                    {sigs.nodes.map((e, i) => (
                      <li key={i}>
                        {e.no_link === true ? (
                          e.name
                        ) : (
                          <Link to={`/sigs/${e.name.toLowerCase()}`}>
                            {e.name}
                          </Link>
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
                <div className="col item social">
                  <OutboundLink
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.facebook.com/ietnitk"
                  >
                    <i className="fa fa-facebook" />
                  </OutboundLink>
                  <OutboundLink
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/company/ietnitk/"
                  >
                    <i className="fa fa-linkedin" />
                  </OutboundLink>
                  <OutboundLink
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.github.com/IET-NITK"
                  >
                    <i className="fa fa-github" />
                  </OutboundLink>
                  <OutboundLink
                    target="_blank"
                    rel="noreferrer"
                    href="https://t.me/IET_NITK"
                  >
                    <i className="fa fa-telegram" />
                  </OutboundLink>
                  <OutboundLink
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/c/IETNITK"
                  >
                    <i className="fa fa-youtube" />
                  </OutboundLink>
                  <OutboundLink
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/ietnitk"
                  >
                    <i className="fa fa-instagram" />
                  </OutboundLink>
                  <OutboundLink
                    target="_blank"
                    rel="noreferrer"
                    href="/feed.xml"
                  >
                    <i className="fa fa-rss" />
                  </OutboundLink>
                </div>
              </div>
              <p className="copyright">
                <i className="fa fa-heart heartbeat" /> &nbsp; IET NITK |&nbsp;
                <OutboundLink
                  target="_blank"
                  rel="noreferrer"
                  className="text-white"
                  href="https://github.com/IET-NITK/IET-NITK.github.io#contributors"
                >
                  Made by IET NITK Web Team
                </OutboundLink>
                <br />
                Last updated on: {site.buildTime}
              </p>
            </div>
          </footer>
        </div>
      )}
    />
  )
}

export default Footer
