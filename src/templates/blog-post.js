import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { RenderAuthors } from "../components/helper"
import SEO from "../components/seo"

export const BlogArticle = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.file.childMarkdownRemark.frontmatter.title}/>
      <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              {data.file.childMarkdownRemark.frontmatter.displayOnBlog ===
              false ? null : (
                <>
                  <div
                    className="post-image"
                    style={{
                      backgroundImage: `url('${data.file.childMarkdownRemark.frontmatter.image.publicURL}')`,
                      backgroundAttachment: "fixed",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                </>
              )}

              <div className="post-body">
                <h3>{data.file.childMarkdownRemark.frontmatter.title}</h3>
                <div className="post-info">
                  <span>
                    By{" "}
                    <b>
                      {RenderAuthors(
                        data.file.childMarkdownRemark.frontmatter.authors,
                        ""
                      )}
                    </b>
                  </span>
                  -
                  <span>
                    {data.file.childMarkdownRemark.frontmatter.publishDate}
                  </span>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.file.childMarkdownRemark.html,
                  }}
                />
                <span>
                  Written by{" "}
                  <b>
                    {RenderAuthors(
                      data.file.childMarkdownRemark.frontmatter.authors,
                      ""
                    )}
                    <br />
                    on {data.file.childMarkdownRemark.frontmatter.publishDate}
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
    file(
      sourceInstanceName: { eq: "blog" }
      extension: { eq: "md" }
      relativeDirectory: { eq: $pathSlug }
    ) {
      childMarkdownRemark {
        frontmatter {
          authors
          displayOnBlog
          publishDate(formatString: "Do MMMM, YYYY")
          title
          image {
            publicURL
          }
        }
        html
      }
    }
  }
`

export default BlogArticle
