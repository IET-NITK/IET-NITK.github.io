import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SearchEngineOps from "../components/seo"
import ReactMarkdown from "react-markdown"

const BlogArticle = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOps
        title={data.events.title}
      />
      <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              <div className="post-body">
                <h3>{data.events.title}</h3>
                <div className="post-info">
                  <span>{data.events.date}</span>
                </div>
                <ReactMarkdown skipHtml={true}>
                  {data.events.description}
                </ReactMarkdown>
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
    events: strapiEvents(route: { eq: $pathSlug }) {
      title
      date(formatString: "MMMM Do, YYYY")
      description
    }
  }
`

export default BlogArticle
