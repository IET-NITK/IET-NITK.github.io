import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import moment from "moment"
import { RenderAuthors } from "../components/helper"

export const Project = ({ data, pathname, pageContext }) => {
  return (
    <Layout location={pathname && pathname.location}>
      <SEO title={pageContext.title + " @" + pageContext.sig} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary" style={{ paddingTop: "1em" }}>
                {pageContext.title}
              </h2>
              <p>{pageContext.description}</p>
            </div>
            <div className="block-content">
              <div className="row">
                <div className="col-lg-6">
                  <h4>Built by</h4>
                  <ul>
                    {pageContext.builtBy &&
                      pageContext.builtBy.map((e, i) => (
                        <li key={i}>
                          <Link
                            to={
                              "/member/" + e.toLowerCase().split(" ").join("")
                            }
                          >
                            {e}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="col-lg-6 text-right">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={"https://" + pageContext.URL}
                    className="btn btn-primary"
                  >
                    <i className="fa fa-link"/> Project Link
                  </a>
                </div>
              </div>
              {data.allFile.nodes.length !== 0 ? (
                <>
                  <hr />
                  <h4>Project Reports</h4>
                </>
              ) : null}

              {data.allFile.nodes.map((element, index) => (
                <div key={index} className="clean-blog-post">
                  <div className="row">
                    <div className="col-lg-12">
                      <h3>
                        <Link
                          className="btn-link"
                          to={
                            "/projects/" +
                            pageContext.title
                              .toLowerCase()
                              .split(" ")
                              .join("") +
                            "/" +
                            element.childMarkdownRemark.frontmatter.title
                              .toLowerCase()
                              .split(" ")
                              .join("")
                          }
                        >
                          {element.childMarkdownRemark.frontmatter.title}
                        </Link>
                      </h3>
                      <div className="info">
                        <span className="text-muted">
                          By
                          {RenderAuthors(
                            element.childMarkdownRemark.frontmatter.authors,
                            ""
                          )}
                          <br />
                          {moment(element.birthTime).format("Do MMMM, YYYY")}
                        </span>
                      </div>
                      <p> {element.childMarkdownRemark.excerpt} </p>
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

export const postQuery = graphql`
  query($pathSlug: String!) {
    allFile(
      filter: {
        sourceInstanceName: { eq: "project-reports" }
        ext: { eq: ".md" }
        relativeDirectory: { regex: $pathSlug }
      }
      sort: { fields: birthTime }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            title
            authors
          }
          excerpt
        }
        birthTime
      }
    }
  }
`

export default Project
