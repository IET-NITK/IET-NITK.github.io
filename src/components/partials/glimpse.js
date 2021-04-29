import React from "react"
import { graphql, StaticQuery } from "gatsby"

export const Glimpse = props => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            buildTime(formatString: "MMMM Do, YYYY")
            siteMetadata {
              title
              description
            }
          }
          allSigYaml(sort: { fields: no_link }) {
            nodes {
              name
              no_link
            }
          }
        }
      `}
      render={({ site, allSigYaml }) => (
        <div className="bg-primary text-light pt-4 pb-4">
          <div className="container">
            <h5><strong>Glimpse @ IET NITK</strong></h5>
          </div>
        </div>
      )}
    />
  )
}

export default Glimpse
