import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { lcrs } from "./helper";

export const SIGShowcase = ({ hide_link }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          sigs: allStrapiSigs(filter: {}, sort: { fields: no_link }) {
            nodes {
              name
              description
              no_link
              logo {
                localFile {
                  childImageSharp {
                    fixed {
                      srcWebp
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={({ sigs }) => (
        <div className="row justify-content-center">
          {sigs.nodes.map((s, i) => (
            <div
              className="col-md-5 col-lg-4"
              key={i}
              style={{ marginBottom: "1em" }}
            >
              <div className="clean-pricing-item" style={{ height: "100%" }}>
                <div style={{ width: "100%" }}>
                  <img
                    alt=""
                    src={s.logo.localFile.childImageSharp.fixed.srcWebp}
                    style={{
                      width: "150px",
                      height: "auto!important",
                      display: "block",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </div>
                <p>{s.description}</p>
                {!s.no_link && !hide_link ? (
                  <Link
                    className="btn btn-outline-primary btn-block"
                    to={`sigs/${lcrs(s.name)}`}
                  >
                    Read More
                  </Link>
                ) : null}
                {!hide_link && s.name==="Inkheart" ? (
                  <OutboundLink
                    className="btn btn-outline-primary btn-block"
                    href="https://ietinkheartblog.wordpress.com"
                  >
                    Go to InkHeart Blog
                  </OutboundLink>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    />
  );
};
