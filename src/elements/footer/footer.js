import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { lcrs } from "../helper";
import * as styles from "./footer.module.scss";

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
          className={styles.footer_dark}
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
                <div className={`col-sm-6 col-md-3 ${styles.item}`}>
                  <h3 className="mt-4 mb-3">Important Links</h3>
                  <ul className={styles.footer_list}>
                    {[{ label: "Home", route: "/" },
                    { label: "About Us", route: "/about" },
                    { label: "Events", route: "/events" },
                    { label: "Projects", route: "/projects" },
                    { label: "Blog", route: "/blog" },
                    { label: "Say Hi", route: "/contact" }].map(({ label, route }) => (
                      <li key={route}>
                        <Link to={route}>{label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`col-sm-6 col-md-3 ${styles.item}`}>
                  <h3 className="mt-4 mb-3">Special Interest Groups</h3>
                  <ul className={styles.footer_list}>
                    {sigs.nodes.map((sig, index) => (
                      <li key={index}>
                        {sig.no_link === true ? (
                          sig.name
                        ) : (
                          <Link to={`/sigs/${lcrs(sig.name)}`}>
                            {sig.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`col-md-6 ${styles.item} ${styles.text}`}>
                  <div className="mobile-center-laptop-right">
                    <h3 className="mt-4 mb-3">IET NITK</h3>
                    <p className={styles.footer_list}>{about.footer}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`my-0 ${styles.bottom_footer}`}>
              <div className="container">
                <div className="row">
                  <div className={`col-md-6 ${styles.copyright} mobile-center-laptop-left`}>
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
                  <div className={`col-md-6 item ${styles.item} ${styles.social} mobile-center-laptop-right`}>
                    {[{ href: "https://www.facebook.com/ietnitk", icon: "facebook" },
                    { href: "https://www.linkedin.com/company/ietnitk/", icon: "linkedin" },
                    { href: "https://www.github.com/IET-NITK", icon: "github" },
                    { href: "https://t.me/IET_NITK", icon: "telegram" },
                    { href: "https://www.youtube.com/c/IETNITK", icon: "youtube" },
                    { href: "https://www.instagram.com/ietnitk", icon: "instagram" }].map(({ href, icon }) => (
                      <OutboundLink
                      href={href}
                      key={href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className={`fa fa-${icon}`} />
                    </OutboundLink>
                    ))}
                    <Link
                      href="/feed.xml"
                      rel="noreferrer"
                      target="_blank"
                    >
                      <i className="fa fa-rss" />
                    </Link>
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
