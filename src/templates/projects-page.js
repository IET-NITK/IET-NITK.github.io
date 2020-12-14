import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export const Project = props => {
  const reports = props.data && props.data.allFile && props.data.allFile.nodes
  console.log(reports)
  return (
    <Layout location={props.pathname && props.pathname.location}>
      <SEO title={props.pageContext.pathSlug} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-info" style={{ paddingTop: "1em" }}>
                {props.pageContext.pathSlug}
              </h2>
              <p>{props.pageContext.description}</p>
            </div>
            <div className="block-content">
              {reports &&
                reports.map((element, index) => (
                  <div key={index} className="clean-blog-post">
                    <div className="row">
                      <div className="col-lg-12">
                        <h3>
                          <Link
                            className="btn-link"
                            to={
                              "/projects/" +
                              props.pageContext.pathSlug
                                .toLowerCase()
                                .split(" ")
                                .join("") +
                              "/" +
                              element.name.toLowerCase().split(" ").join("")
                            }
                          >
                            {element.childMarkdownRemark.frontmatter.title}
                          </Link>
                        </h3>

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
        relativeDirectory: { eq: $pathSlug }
      }
    ) {
      nodes {
        name
        childMarkdownRemark {
          frontmatter {
            title
            authors
          }
          excerpt
        }
        birthtime
      }
    }
  }
`

export default Project
