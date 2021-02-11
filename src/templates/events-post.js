import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"

export const BlogArticle = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.file && data.file.childMarkdownRemark.frontmatter.title}
      />
      <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              <div className="post-body">
                <h3>{data.file.childMarkdownRemark.frontmatter.title}</h3>
                <div className="post-info">
                  <span>
                    {data.file.childMarkdownRemark.frontmatter.date}
                  </span>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.file.childMarkdownRemark.html,
                  }}
                />
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
      sourceInstanceName: { eq: "events" }
      extension: { eq: "md" }
      relativeDirectory: { eq: $pathSlug }
    ) {
      childMarkdownRemark {
        excerpt(format: PLAIN)
        frontmatter {
          date(formatString: "MMMM Do, YYYY")
          title
        }
        html
      }
    }
  }
`

export default BlogArticle
