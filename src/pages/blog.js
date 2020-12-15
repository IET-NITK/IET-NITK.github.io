import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import moment from "moment"
import SEO from "../components/seo"
import { RenderAuthors } from "../components/helper"

export const Blog = props => {
  let blogs = props.data.allFile.nodes

  return (
    <Layout location={props.location.pathname} title={"Main"}>
      <SEO title="Blog" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Official IET-NITK Blog</h2>
              <p>
                We post cool stuff. Subscribe to our Newsletter to stay updated!
              </p>
            </div>
            <div className="block-content">
              {blogs.map((element, index) => {
                let link = element.relativeDirectory
                let date = element.birthTime
                let excerpt = element.childMarkdownRemark.excerpt
                let ttr = element.childMarkdownRemark.timeToRead
                let frontmatter = element.childMarkdownRemark.frontmatter
                return (
                  <div key={index} className="clean-blog-post">
                    <div className="row">
                      <div className="col-lg-5">
                        <img
                          alt="X"
                          className="rounded img-fluid"
                          src={frontmatter.image.childImageSharp.fluid.src}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                      <div className="col-lg-7">
                        <h3 data-toggle="tooltip" title={ttr + " minute read"}>
                          {frontmatter.title}
                        </h3>
                        <div className="info">
                          <span className="text-muted">
                            By{" "}
                            {RenderAuthors(frontmatter.authors,"")}
                            <br />
                            {moment(date).format("Do MMMM, YYYY")}
                          </span>
                        </div>
                        <p>{excerpt}</p>
                        <Link
                          to={link}
                          className="btn btn-outline-primary btn-sm"
                          type="button"
                        >
                          Read On
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    allFile(
      filter: { sourceInstanceName: { eq: "blog" }, ext: { eq: ".md" } }
      sort: { fields: birthTime, order: DESC }
    ) {
      nodes {
        relativeDirectory
        birthTime
        childMarkdownRemark {
          timeToRead
          excerpt(format: PLAIN)
          frontmatter {
            authors
            title
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
