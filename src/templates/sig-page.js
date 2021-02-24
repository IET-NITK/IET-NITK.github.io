import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { RenderAuthors } from "../components/helper"
import PaginationComponent from "../components/partials/pagination"

export const SIG = ({ pageContext, pathname, data }) => {
  const { sig_details, sig_logo, sig_projects } = data

  return (
    <Layout location={pathname && pathname.location}>
      <SEO title={sig_details.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <Link to={"/sigs/" + sig_details.name.toLowerCase()}>
                <img
                  src={sig_logo.childImageSharp.fixed.srcWebp}
                  alt={sig_details.name}
                  className="sig-logo"
                  style={{ maxWidth: "200px" }}
                />
              </Link>
              <p>{sig_details.description}</p>
            </div>
            <div className="block-content">
              <PaginationComponent
                max={10}
                list={sig_projects.nodes}
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3>
                          {element.builtBy && element.URL ? (
                            <Link
                              to={
                                "/projects/" +
                                element.title.toLowerCase().split(" ").join("")
                              }
                            >
                              {element.title}
                            </Link>
                          ) : (
                            element.title
                          )}
                        </h3>
                        {element.builtBy !== null ? (
                          <>
                            <div className="info">
                              <span className="text-muted">
                                By
                                {RenderAuthors(element.builtBy, "")}
                              </span>
                            </div>
                          </>
                        ) : null}

                        <p> {element.description} </p>
                      </div>
                    </div>
                  </div>
                )}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default SIG

export const postQuery = graphql`
  query x($pathSlug: String!) {
    sig_logo: file(
      sourceInstanceName: { eq: "sig_logo" }
      name: { eq: $pathSlug }
    ) {
      childImageSharp {
        fixed {
          srcWebp
        }
      }
    }
    sig_projects: allProjectsYaml(filter: {sig: {eq: $pathSlug}}, sort: {fields: builtBy}) {
      nodes {
        title
        URL
        builtBy
        description
      }
    }
    sig_details: sigYaml(name: { eq: $pathSlug }) {
      name
      description
    }
  }
`
