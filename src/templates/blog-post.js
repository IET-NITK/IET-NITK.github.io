import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import moment from "moment"

export const BlogArticle = props => {
  const blog = props.data.allFile.edges[0]

  const current = blog.node.childMarkdownRemark
  // const currentBirthTime =

  return (
    <Layout>
      <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              {current.frontmatter.displayOnBlog === false ? null : (
                <>
                  <div
                    className="post-image"
                    style={{
                      backgroundImage: `url('${current.frontmatter.image.childImageSharp.fluid.src}')`,
                      backgroundAttachment: "fixed",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </>
              )}

              <div className="post-body">
                <h3>{current.frontmatter.title}</h3>
                <div className="post-info">
                  <span>
                    By{" "}
                    <b>
                      <a
                        className="no-underline"
                        href={`/member/${current.frontmatter.author
                          .toLowerCase()
                          .split(" ")
                          .join("")}`}
                      >
                        {current.frontmatter.author}
                      </a>
                    </b>
                  </span>
                  -
                  <span>
                    {moment(blog.node.birthtime).format("Do MMMM, YYYY")}
                  </span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: current.html }} />
                <span>
                  Written by{" "}
                  <b>
                    <a
                      className="no-underline"
                      href={`/member/${current.frontmatter.author
                        .toLowerCase()
                        .split(" ")
                        .join("")}`}
                    >
                      {current.frontmatter.author + " "}
                    </a>
                    on {moment(blog.node.birthtime).format("Do MMMM, YYYY")}
                  </b>
                </span>
              </div>
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
        sourceInstanceName: { eq: "blog" }
        ext: { eq: ".md" }
        relativeDirectory: { eq: $pathSlug }
      }
      sort: { fields: birthTime, order: DESC }
    ) {
      edges {
        next {
          childMarkdownRemark {
            frontmatter {
              title
              author
            }
            timeToRead
          }
        }
        previous {
          childMarkdownRemark {
            frontmatter {
              title
              author
            }
            timeToRead
          }
        }
        node {
          childMarkdownRemark {
            frontmatter {
              author
              title
              displayOnBlog
              image {
                childImageSharp {
                  fluid {
                    src
                  }
                }
                birthtime
              }
            }
            html
          }
          birthtime
        }
      }
    }
  }
`

export default BlogArticle
