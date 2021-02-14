import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { RenderAuthors } from "../components/helper"
import PaginationComponent from "../components/partials/pagination"

export const SIG = ({ pageContext, pathname, data }) => {
  const { allProjectsYaml, file, sigYaml } = data

  return (
    <Layout location={pathname && pathname.location}>
      <SEO title={sigYaml.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <Link to={"/sig/" + sigYaml.name.toLowerCase()}>
                <img
                  alt={sigYaml.name}
                  src={file.childImageSharp.fixed.srcWebp}
                  className="sig-logo"
                  style={{ maxWidth: "200px" }}
                />
              </Link>
              <p>{sigYaml.description}</p>
            </div>
            <div className="block-content">
              <PaginationComponent
                max={10}
                list={allProjectsYaml.nodes}
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
  query x($pathSlug: String!, $signame: String!) {
    file(sourceInstanceName: { eq: "sig_logo" }, name: { regex: $pathSlug }) {
      childImageSharp {
        fixed {
          srcWebp
        }
      }
    }
    allProjectsYaml(filter: { sig: { eq: $signame } }, sort: { fields: URL }) {
      nodes {
        description
        builtBy
        title
        URL
      }
    }
    sigYaml(name: { eq: $signame }) {
      name
      description
    }
  }
`
