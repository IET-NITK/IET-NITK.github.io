import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"

const Expo = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Expo 2021" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Women in Tech @ IET NITK</h2>
              <p>
                WiT
              </p>
            </div>
            <div className="block-content">
              {/* <div className="card mb-4">
                <div className="card-body">Cipher Rovisp Torsion</div>
              </div> */}

            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export const postQuery = graphql`
  {
    projects: allProjects(
      filter: { builtBy: {}, label: { eq: "Expo 2021" } }
      sort: { fields: title, order: ASC }
    ) {
      nodes {
        title
        description
        sig
        builtBy
        url
      }
    }
  }
`
export default Expo
