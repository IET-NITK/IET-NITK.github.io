import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import moment from "moment"

export const BlogArticle = props => {
  const blog = props.data.allFile.edges[0]
  const previous = blog.previous
  const next = blog.next
  const current = blog.node.childMarkdownRemark
  // const currentBirthTime = 
  console.log(blog, previous, next, current)
  return (
    <Layout>
      <main class="page blog-post">
        <section class="clean-block clean-post dark">
          <div class="container">
            <div class="block-content">
              <div
                class="post-image"
                style={{backgroundImage:`url('${current.frontmatter.image.childImageSharp.fluid.src}')`,backgroundAttachment:"fixed","backgroundRepeat":"no-repeat"}}
              ></div>

              <div class="post-body">
                <h3>{current.frontmatter.title}</h3>
                <div class="post-info">
                  <span>
                    By{" "}
                    <b>
                      <a
                        class="no-underline"
                        href={`/member/${current.frontmatter.author
                          .toLowerCase()
                          .split(" ")
                          .join("")}`}
                      >
                        {current.frontmatter.author}
                      </a>
                    </b>
                  </span>
                  -<span>{moment(blog.node.birthtime).format("Do MMMM, YYYY")}</span>
                </div>
                <div dangerouslySetInnerHTML={{ __html: current.html }} />
                <span>
                  Written by{" "}
                  <b>
                    <a
                      class="no-underline"
                      href={`/member/${current.frontmatter.author
                        .toLowerCase()
                        .split(" ")
                        .join("")}`}
                    >
                      {current.frontmatter.author+" "}
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
