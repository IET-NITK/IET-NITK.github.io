import { graphql, Link, navigate } from "gatsby"
import React, { useEffect } from "react"
import { RenderAuthors } from "../components/helper"
import Layout from "../components/layout"
import PaginationComponent from "../components/partials/pagination"
import SearchEngineOps from "../components/seo"

const Expo = ({ data, location }) => {
  useEffect(() => {
    if (data.expo.open !== true) {
      navigate("/")
    }
  })
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title={`Expo ${new Date().getFullYear()}`} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">IET NITK @ Expo {new Date().getFullYear()}</h2>
              <p>
                Expo '{String(new Date().getFullYear()).slice(2)} is a club-wide project showcase showing the best of the
                products made by NITK. Here's some of ours.
              </p>
            </div>
            <div className="block-content">
              <PaginationComponent
                max={10}
                list={data.projects.nodes}
                filterBy="sig"
                filterLabel="Filter by SIG"
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <h3 className="text-capitalize">{element.title}</h3>
                    <div className="info">
                      <span className="text-muted">
                        <Link to={"/sigs/" + element.sig.name.toLowerCase()}>
                          {element.sig.name}
                        </Link>
                      </span>
                    </div>
                    {element.description || ""}
                    {element.authors ? (
                      <p>
                        Built by
                        {RenderAuthors(element.authors, "")}
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
    expo: strapiExpo {
      open
    }
    projects:   allStrapiProjects(sort: {fields: title, order: DESC}) {
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
export default Expo
