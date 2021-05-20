import React from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { RenderAuthors } from "../components/helper"
import PaginationComponent from "../components/partials/pagination"
import Glimpse from "../components/partials/glimpse"

const SIG = ({ pageContext, pathname, data, uri }) => {
  const { sig_details, sig_projects } = data
  return (
    <Layout location={pathname && pathname.location}>
      <SearchEngineOps title={sig_details.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <Link to={"/sigs/" + sig_details.name.toLowerCase()}>
                <img
                  src={sig_details.logo.childImageSharp.fixed.srcWebp}
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
                          {element.authors && element.url ? (
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
                        {element.label ? (
                          <div className="badge badge-primary">
                            {element.label}
                          </div>
                        ) : null}
                        {element.authors !== null ? (
                          <>
                            <div className="info">
                              <span className="text-muted">
                                By
                                {RenderAuthors(element.authors, "")}
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
      <Glimpse currentRoute={uri} />
    </Layout>
  )
}

export default SIG

export const postQuery = graphql`
  query sigpage($pathSlug: String!) {
    sig_projects: allStrapiProjects(
      filter: { sig: { name: { eq: $pathSlug } } }
      sort: { fields: authors___name }
    ) {
      nodes {
        description
        title
        url
        authors {
          name
        }
      }
    }
    sig_details: strapiSigs(name: { eq: $pathSlug }) {
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
`
