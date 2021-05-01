import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SearchEngineOps from "../components/seo"
import ReactMarkdown from "react-markdown"

const BlogArticle = ({ data }) => {
  return (
    <Layout>
      <SearchEngineOps
        title={data.event.title}
      />
      <main className="page blog-post">
        <section className="clean-block clean-post dark">
          <div className="container">
            <div className="block-content">
              <div className="post-body">
                <h3>{data.event.title}</h3>
                <div className="post-info">
                  <span>
                    {data.event.date}
                  </span>
                </div>
                <ReactMarkdown>
                  {data.event.description}
                </ReactMarkdown>
                <span>
                Last updated on {data.event.updated_at}
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
    event: strapiEvents(route: {eq: $pathSlug}) {
      title
      updated_at(formatString: "MMMM Do, YYYY")
      description
      date(formatString: "MMMM Do, YYYY")
    }
  }
`

export default BlogArticle
