import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { RenderAuthors } from "../components/helper"
import SEO from "../components/seo"

const PreviewOther = ({ post, isPrevious }) => {
  if (post)
    return (
      <div className="m-4">
        <b>
          {isPrevious === true ? "Previous Post: " : "Next Up: "}
          <Link to={"/blog/"+post.relativeDirectory}>{post.childMarkdownRemark.frontmatter.title}</Link>
        </b>
        <div className="post-info">
          <span>
            By{" "}
            <b>
              {RenderAuthors(post.childMarkdownRemark.frontmatter.authors, "")}
            </b>
          </span>
          <br />
          <span>{post.childMarkdownRemark.frontmatter.publishDate}</span>
        </div>
        {post.childMarkdownRemark.excerpt}
      </div>
    )
  else return null
}

export const BlogArticle = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.post.childMarkdownRemark.frontmatter.title} />
      <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              {data.post.childMarkdownRemark.frontmatter.displayOnBlog ===
              false ? null : (
                <>
                  <div
                    className="post-image"
                    style={{
                      backgroundImage: `url('${data.post.childMarkdownRemark.frontmatter.image.publicURL}')`,
                      backgroundAttachment: "fixed",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </>
              )}

              <div className="post-body">
                <h3>{data.post.childMarkdownRemark.frontmatter.title}</h3>
                <div className="post-info">
                  <span>
                    By{" "}
                    <b>
                      {RenderAuthors(
                        data.post.childMarkdownRemark.frontmatter.authors,
                        ""
                      )}
                    </b>
                  </span>
                  -
                  <span>
                    {data.post.childMarkdownRemark.frontmatter.publishDate}
                  </span>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.post.childMarkdownRemark.html,
                  }}
                />
                <span>
                  Written by{" "}
                  <b>
                    {RenderAuthors(
                      data.post.childMarkdownRemark.frontmatter.authors,
                      ""
                    )}
                    <br />
                    on {data.post.childMarkdownRemark.frontmatter.publishDate}
                  </b>
                </span>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-6">
                  <PreviewOther post={data.before.nodes[0]} isPrevious={true} />
                </div>
                <div className="col-lg-6">
                  <PreviewOther post={data.after.nodes[0]} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  query($pathSlug: String!, $articleDate: Date!) {
    post: file(
      sourceInstanceName: { eq: "blog" }
      extension: { eq: "md" }
      relativeDirectory: { eq: $pathSlug }
    ) {
      childMarkdownRemark {
        frontmatter {
          authors
          publishDate(formatString: "MMMM Do, YYYY")
          title
          image {
            publicURL
          }
        }
        html
      }
    }
    before: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        ext: { eq: ".md" }
        childMarkdownRemark: {
          frontmatter: { publishDate: { lt: $articleDate } }
        }
      }
      sort: {
        fields: childrenMarkdownRemark___frontmatter___publishDate
        order: DESC
      }
      limit: 1
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          frontmatter {
            publishDate(formatString: "MMMM Do, YYYY")
            title
            authors
          }
          excerpt
        }
      }
    }

    after: allFile(
      filter: {
        sourceInstanceName: { eq: "blog" }
        ext: { eq: ".md" }
        childMarkdownRemark: {
          frontmatter: { publishDate: { gt: $articleDate } }
        }
      }
      sort: {
        fields: childrenMarkdownRemark___frontmatter___publishDate
        order: DESC
      }
      limit: 1
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          frontmatter {
            publishDate(formatString: "MMMM Do, YYYY")
            title
            displayOnBlog
            authors
          }
          excerpt
        }
      }
    }
  }
`

export default BlogArticle
