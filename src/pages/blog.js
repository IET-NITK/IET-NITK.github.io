import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import { RenderAuthors } from "../components/helper"
import PaginationComponent from "../components/partials/pagination"

const Blog = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Blog" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Official IET-NITK Blog</h2>
              <p>We post cool stuff. Stay updated!</p>
            </div>
            <div className="block-content">
              <PaginationComponent
                max={5}
                list={data.blogs.nodes}
                item={(element, inx) => {
                  let imagelink = element.header
                  // if (imagelink) {
                  //   if (imagelink.childImageSharp.fixed) {
                  //     imagelink = imagelink.childImageSharp.fixed.srcWebp
                  //   } else {
                  //     imagelink = imagelink.childImageSharp.publicURL
                  //   }
                  // } else {
                    imagelink = data.ietlogo.fixed.srcWebp
                  // }
                  return (
                    <div key={inx} className="clean-blog-post">
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            alt={element.title}
                            className="rounded img-fluid"
                            src={imagelink}
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                        <div className="col-lg-7">
                          <h3>{element.title}</h3>
                          <div className="info">
                            <span className="text-muted">
                              By&nbsp;
                              {/* {RenderAuthors(
                                element.childMarkdownRemark.frontmatter.authors,
                                ""
                              )} */}
                              <br />
                              {element.date}
                            </span>
                          </div>
                          <p>{element.excerpt}</p>
                          <Link
                            to={"/blog/" + element.relativeDirectory}
                            className="btn btn-outline-primary btn-sm"
                            type="button"
                          >
                            Read More
                          </Link>
                        </div>
                      </div>
                    </div>
                  )
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    ietlogo: imageSharp(fixed: { originalName: { eq: "logo-wide-1.png" } }) {
      fixed {
        srcWebp
      }
    }
    blogs: allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        title
        date(formatString: "MMMM Do, YYYY")
        authors {
          name
        }

      }
    }
    allFile(
      filter: { sourceInstanceName: { eq: "blog" }, ext: { eq: ".md" } }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          timeToRead
          excerpt(format: PLAIN)
          frontmatter {
            authors
            title
            image {
              publicURL
              childImageSharp {
                fixed {
                  srcWebp
                }
              }
            }
            date(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  }
`

export default Blog
