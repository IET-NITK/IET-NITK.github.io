import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import PaginationComponent from "../components/partials/pagination"
import SearchEngineOps from "../components/seo"

const Events = ({ data, location }) => {
  return (
    <Layout location={location.pathname} title={"Main"}>
      <SearchEngineOps title="Events" />
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

                noneMessage="No event reports here. Come back soon!"
                list={data.events.nodes}
                item={(element, index) => (
                  <div key={index} className="clean-blog-post">
                    <div className="row">
                      <div className="col-lg-7">
                        <h3>{element.title}</h3>
                        <div className="info">
                          <span className="text-muted">
                            {element.date}
                          </span>
                        </div>
                        <p>{element.excerpt}</p>
                        <Link
                          to={"/events/" + element.route}
                          className="btn btn-outline-primary btn-sm"
                          type="button"
                        >
                          Read More 
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
    events:   allStrapiEvents(sort: {fields: date, order: DESC}) {
      nodes {
        date(formatString: "MMMM Do, YYYY")
        title
        excerpt
        route
      }
    }
  }
`

export default Events
