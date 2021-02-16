import { graphql, Link } from "gatsby"
import React from "react"
import { RenderAuthors } from "../components/helper"
import Layout from "../components/layout"
import PaginationComponent from "../components/partials/pagination"
import SEO from "../components/seo"

const Events = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SEO title="Project Reports" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Project Reports @ IET NITK</h2>
              <p>
                We do many projects throughtout the year, and we love to learn
                something and give back from them. Here's our reports from our
                projects.
              </p>
            </div>
            <div className="block-content">
              {/* <div className="card mb-4">
                <div className="card-body">Cipher Rovisp Torsion</div>
              </div> */}
              <PaginationComponent
                max={10}
                noneMessage="No project reports here. Come back soon!"
                list={data.allFile.nodes}
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <h3>{element.title}</h3>
                    <div className="info">
                      <span className="text-muted">{element.sig}</span>
                    </div>
                    <p>
                      {element.authors ? (
                        <p>
                          Built by
                          {RenderAuthors(element.builtBy || [], "")}
                        </p>
                      ) : null}
                    </p>
                    <Link
                      to={
                        "/projects/" +
                        element.relativeDirectory.toLowerCase().split(" ").join("")
                      }
                      className="btn btn-outline-primary btn-sm"
                      type="button"
                    >
                      Read More
                    </Link>
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
    allFile(
      filter: {
        sourceInstanceName: { eq: "project-reports" }
        extension: { eq: "md" }
      }
    ) {
      nodes {
        relativeDirectory
        sourceInstanceName
        childMarkdownRemark {
          frontmatter {
            title
            authors
            date
          }
        }
      }
    }
  }
`

export default Events
