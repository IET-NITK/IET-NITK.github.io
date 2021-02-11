import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import PaginationComponent from "../components/partials/pagination"
import SEO from "../components/seo"

const Events = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SEO title="Events" />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container">
            <div className="block-heading">
              <h2 className="text-primary">Events @ IET NITK</h2>
              <p>
                We hold many events throughtout the year, here's a glimpse of it
                all
              </p>
            </div>
            <div className="block-content">
              <PaginationComponent
                max={5}
                list={data.allFile.nodes}
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <div className="row">
                      <div className="col-lg-7">
                        <h3>{element.childMarkdownRemark.frontmatter.title}</h3>
                        <div className="info">
                          <span className="text-muted">
                            {element.childMarkdownRemark.frontmatter.eventDate}
                          </span>
                        </div>
                        <p>{element.childMarkdownRemark.excerpt}</p>
                        <Link
                          to={"/events/" + element.relativeDirectory}
                          className="btn btn-outline-primary btn-sm"
                          type="button"
                        >
                          Read On
                        </Link>
                      </div>
                    </div>
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
      filter: { sourceInstanceName: { eq: "events" }, ext: { eq: ".md" } }
      sort: {
        fields: childMarkdownRemark___frontmatter___eventDate
        order: DESC
      }
    ) {
      nodes {
        relativeDirectory
        childMarkdownRemark {
          excerpt(format: PLAIN)
          frontmatter {
            eventDate(formatString: "MMMM Do, YYYY")
            title
          }
        }
      }
    }
  }
`

export default Events
