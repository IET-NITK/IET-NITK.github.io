import { graphql, Link } from "gatsby"
import React from "react"
import { RenderAuthors } from "../components/helper"
import Layout from "../components/layout"
import PaginationComponent from "../components/partials/pagination"
import SEO from "../components/seo"

const Projects = ({ data, location }) => {
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
                filterBy="sig"
                filterLabel="Filter by SIG"
                list={data.projects.nodes}
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <h3 className="text-capitalize">{element.title}</h3>
                    {element.label ? (
                      <div className="badge badge-primary mr-2 ">{element.label}</div>
                    ) : null}
                    {element.sig ? (
                      <Link
                        to={"/sigs/" + element.sig.toLowerCase()}
                        className="badge badge-info text-uppercase"
                      >
                        {element.sig}
                      </Link>
                    ) : null}
                    <p>{element.description || ""}</p>
                    {element.builtBy ? (
                      <p>
                        Built by
                        {RenderAuthors(element.builtBy || [], "")}
                      </p>
                    ) : null}
                    {element.url ? (
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
        label
        url
      }
    }
  }
`

export default Projects
