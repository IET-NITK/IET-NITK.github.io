import { graphql, Link } from "gatsby"
import React from "react"
import { RenderAuthors } from "../components/helper"
import Layout from "../components/layout"
import PaginationComponent from "../components/partials/pagination"
import SEO from "../components/seo"

const Events = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SEO title="Projects" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Projects @ IET NITK</h2>
              <p>
                We do many projects throughtout the year, here's a glimpse of it
                all
              </p>
            </div>
            <div className="block-content">
              {/* <div className="card mb-4">
                <div className="card-body">Cipher Rovisp Torsion</div>
              </div> */}
              <PaginationComponent
                max={10}
                list={data.projects.nodes}
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <h3 className="text-capitalize">{element.title}</h3>
                    <div className="info">
                      <span className="text-muted">{element.sig}</span>
                    </div>
                    <p>
                      {element.description || ""}
                      {element.builtBy ? (
                        <p>
                          Built by
                          {RenderAuthors(element.builtBy || [], "")}
                        </p>
                      ) : null}
                    </p>
                    {element.URL ? (
                      <Link
                        to={
                          "/projects/" +
                          element.title.toLowerCase().split(" ").join("")
                        }
                        className="btn btn-outline-primary btn-sm"
                        type="button"
                      >
                        Read More
                      </Link>
                    ) : null}
                  </div>
                )}
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
    projects: allProjectsYaml(
      filter: { builtBy: {} }
      sort: { fields: builtBy }
    ) {
      nodes {
        title
        description
        sig
        builtBy
        URL
      }
    }
  }
`

export default Events
