import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  return (
    <Layout location={location.pathname}>
      <SEO title="404" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Sorry, thats a 404!</h2>
              <p>
                We do a lot of stuff, but unfortunately not on this page :)
              </p>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
