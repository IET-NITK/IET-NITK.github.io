import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

export const Author = props => {
  return (
    <Layout location={props.location.pathname}>
      <SEO title={"About " + props.pageContext.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container-fluid">
          <div className="block-content">
            Author page for {props.pageContext.name}, with all blogs and projects listed
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}




export const postQuery = graphql
`
query($tag: [String]) {
  allFile(filter: {ext: {eq: ".md"}, childMarkdownRemark: {frontmatter: {authors: {in: $tag}}}}) {
    nodes {
      relativeDirectory
      childMarkdownRemark {
        frontmatter {
          authors
          title
        }
      }
      sourceInstanceName
      birthTime
    }
  }
}
`
export default Author
