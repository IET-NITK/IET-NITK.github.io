import { graphql, Link } from "gatsby"
import React from "react"
import { lcrs, RenderAuthors } from "../components/helper"
import Layout from "../components/layout"
import PaginationComponent from "../components/partials/pagination"
import SearchEngineOps from "../components/seo"

const Projects = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Projects" />
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
              <PaginationComponent
                max={10}
                filterLabel="Filter by SIG"
                list={data.projects.nodes}
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <h3 className="text-capitalize">{element.title}</h3>
                    {element.label ? (
                      <div className="badge badge-primary mr-2 ">
                        {element.label}
                      </div>
                    ) : null}
                    <Link
                      to={"/sigs/" + element.sig.name.toLowerCase()}
                      className="badge badge-info text-uppercase"
                    >
                      {element.sig.name}
                    </Link>
                    <p>{element.description || ""}</p>
                    {element.authors ? (
                      <p>
                        Built by
                        {RenderAuthors(element.authors || [], "")}
                      </p>
                    ) : null}
                    {element.url ? (
                      <Link
                        to={
                          "/projects/" +
                          lcrs(element.title)}
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
    projects: allStrapiProjects(sort: { fields: authors, order: DESC }) {
      nodes {
        title
        description
        sig {
          name
        }
        url
        authors {
          name
        }
      }
    }
  }
`

export default Projects
