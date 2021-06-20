import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

export const SIGShowcase = ({ hide_link }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          sigs: allStrapiSigs(filter: {}, sort: { fields: no_link }) {
            nodes {
              name
              description
              logo {
                childImageSharp {
                  fixed {
                    srcWebp
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
              key={i}
              className="col-md-5 col-lg-4"
              style={{ marginBottom: "1em" }}
            >
              <div className="clean-pricing-item" style={{ height: "100%" }}>
                <div style={{ width: "100%" }}>
                  <img
                    alt=""
                    src={s.logo.childImageSharp.fixed.srcWebp}
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
                    to={`sigs/${s.name.toLowerCase()}`}
                    className="btn btn-outline-primary btn-block"
                  >
                    Read More
                  </Link>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
    />
  )
}
