import { graphql, Link, navigate } from "gatsby"
import React, { useEffect } from "react"
import { RenderAuthors } from "../components/helper"
import Layout from "../components/layout"
import PaginationComponent from "../components/partials/pagination"
import SEO from "../components/seo"

const Expo = ({ data, location }) => {
  useEffect(() => {
    if (data.site_data.siteMetadata.expo.allow !== true) {
      navigate("/")
    }
  })
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SEO title="Projects" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">IET NITK @ Expo 2021</h2>
              <p>
                Expo '21 is a club-wide project showcase showing the best of the
                products made by NITK. Here's some of ours.
              </p>
            </div>
            <div className="block-content">
              {/* <div className="card mb-4">
                <div className="card-body">Cipher Rovisp Torsion</div>
              </div> */}
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
                        <Link to={"/sigs/"+element.sig.toLowerCase()}>{element.sig}</Link>
                      </span>
                    </div>
                    {element.description || ""}
                    {element.builtBy ? (
                      <p>
                        Built by
                        {RenderAuthors(element.builtBy || [], "")}
                      </p>
                    ) : null}

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
    site_data: site {
      siteMetadata {
        expo {
          allow
          link
        }
      }
    }
    projects: allProjectsYaml(
      filter: { builtBy: {}, label: { eq: "Expo 2021" } }
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
export default Expo
