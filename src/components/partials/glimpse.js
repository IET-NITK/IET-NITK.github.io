import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { getRandom, RenderAuthors } from "../helper"
import { Splide, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css"
import _ from "lodash"

const GlimpseCard = ({ title, authors, id, description, url, children }) => (
  <Link
    to={url}
    class="card bg-primary text-white text-decoration-none"
    style={{ height: "15em" }}
  >
    <div class="card bg-primary" style={{ height: "13em" }}>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <h6 class="card-subtitle mb-2 text-muted text-decoration-none">
          {id === "Blogs" ? "Blog " : id === "Events" ? "Events " : "Project "}
          {authors ? (
            <>
              by
              {RenderAuthors(authors, "text-muted")}
            </>
          ) : null}
        </h6>
        <p class="card-text ">{description}</p>
        {children}
      </div>
    </div>
  </Link>
)

const getRandomThings = (arr, n, currentRoute) => {
  return _.sampleSize(
    arr.filter(
      e =>
        e.name.toLowerCase().split(" ").join("") !== currentRoute &&
        e.route !== currentRoute &&
        e.route !== currentRoute
    ),
    n
  )
}
export const Glimpse = ({ currentRoute }) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          sigs: allStrapiSigs(filter: { no_link: { eq: false } }) {
            nodes {
              name
              description
            }
          }
          blogs: allStrapiBlogs(limit: 3, sort: { fields: date, order: DESC }) {
            nodes {
              name: title
              route
              authors {
                name
              }
              excerpt
              id
            }
          }
          events: allStrapiEvents(
            limit: 3
            sort: { fields: date, order: DESC }
          ) {
            nodes {
              route
              name: title
              id
              excerpt
            }
          }
          projects: allStrapiProjects(
            sort: { fields: id }
            filter: {
              description: { ne: null }
              authors: { elemMatch: { name: { ne: null } } }
            }
          ) {
            nodes {
              name: title
              excerpt: description
              id
              authors {
                name
              }
            }
          }
        }
      `}
      render={({ sigs, blogs, events, projects }) => (
        <div className="bg-primary text-light pt-4 pb-4">
          <div className="container">
            <h5>
              <strong>Glimpse @ IET NITK</strong>
            </h5>
            <div className="row">
              <div className="col-lg-3 col-md-4  mt-5 mb-5">
                {getRandomThings(sigs.nodes, 1, currentRoute).map((e, i) => (
                  <Link
                    to={"/sigs/" + e.name.toLowerCase()}
                    key={i}
                    class="card bg-primary text-white text-decoration-none"
                    style={{ height: "15em" }}
                  >
                    <div class="card-body">
                      <h5 class="card-title">{e.name}</h5>
                      <p className="card-text">{e.description}</p>
                    </div>
                    {/* <Link to="/" class="card-footer text-muted">
                      2 days ago
                    </Link> */}
                  </Link>
                ))}
              </div>
              <div className="col-lg-9 col-md-8  mt-5 mb-5">
                <Splide
                  style={{ height: "13em" }}
                  options={{
                    perPage: 1,
                    gap: "2rem",
                    type: "loop",
                    keyboard: true,
                    pauseonFocus: true,
                    autoplay: true,
                    rewind: true,
                    perMove: 1,
                    interval: 5000,
                    arrows: false,
                    pagination: false,
                    hasAutoplayProgress: true,
                  }}
                >
                  {getRandomThings(
                    [...blogs.nodes, ...events.nodes, ...projects.nodes],
                    20,
                    currentRoute
                  ).map((e, i) => {
                    const id = e.id.split("_")[0]
                    return (
                      <SplideSlide style={{ height: "15em" }} key={i}>
                        <div class="card bg-primary" style={{ height: "15em" }}>
                          <Link
                            to={
                              id === "Projects"
                                ? "/projects/" +
                                  e.name.toLowerCase().split(" ").join("")
                                : `/${id.slice(0, -1).toLowerCase()}/${e.route}`
                            }
                            class="card-body text-white text-decoration-none"
                          >
                            <h5 class="card-title">{e.name}</h5>
                            <h6 class="card-subtitle mb-2 text-muted text-decoration-none">
                              {id === "Blogs"
                                ? "Blog "
                                : id === "Events"
                                ? "Events "
                                : "Project "}
                            </h6>
                            <div class="card-text ">
                              {id === "Events"
                                ? _.truncate(e.excerpt, {
                                    length: 200,
                                  })
                                : null}
                            </div>
                          </Link>
                          {e.authors ? (
                            <div class="card-footer text-muted">
                              By
                              {RenderAuthors(e.authors, "text-muted")}
                            </div>
                          ) : null}
                        </div>
                      </SplideSlide>
                    )
                  })}
                </Splide>
              </div>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default Glimpse
