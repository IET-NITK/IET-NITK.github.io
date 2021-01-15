import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import projectyml from "../../content/yml/projects.yml"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { RenderAuthors } from "../components/helper"

export const SIG = ({ pageContext, pathname, data }) => {
  const sig = pageContext.sigDetails
  let projects = projectyml.filter(element => element.sig === sig.name)

  return (
    <Layout location={pathname && pathname.location}>
      <SEO title={sig.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <Link to={'/sig/'+sig.name.toLowerCase()}>
                <img
                  alt={sig.name}
                  src={data.file.publicURL}
                  className="sig-logo"
                  style={{ maxWidth: "200px" }}
                />
              </Link>
              <p>{sig.description}</p>
            </div>
            <div className="block-content">
              {projects.map((element, index) => (
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
              ))}
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
    file(sourceInstanceName: { eq: "sig_logo" }, name: { regex: $pathSlug }) {
      publicURL
    }
  }
`
