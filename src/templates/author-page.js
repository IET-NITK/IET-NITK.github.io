import React from "react"
import Layout from "../components/layout"
import SearchEngineOps from "../components/seo"
import { graphql, Link } from "gatsby"
import { lcrs, RenderAuthors } from "../components/helper"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import Glimpse from "../components/partials/glimpse"
const RenderArticles = ({ articles, element, index }) => (
  <div
    key={index}
    className="clean-blog-post"
    style={{ paddingBottom: "35px" }}
  >
    <div className="row">
      <div className="col-lg-12">
        <h3>
          <Link className="btn-link" to={"/blog/" + lcrs(element.route)}>
            {element.title}
          </Link>
        </h3>
        <div className="info">
          <span className="text-muted">
            By
            {RenderAuthors(element.authors, "")}
            <br />
            {element.birthTime}
          </span>
        </div>
        <p> {element.excerpt} </p>
      </div>
    </div>
  </div>
)

const RenderProject = ({
  title,
  SIG,
  description,
  authors,
  ongoing,
  year,
  label,
  sig,
  url,
}) => {
  return (
    <div className="clean-blog-post" style={{ paddingBottom: "35px" }}>
      <div className="row">
        <div className="col-lg-12">
          <h3>
            {url ? (
              <Link to={"/projects/" + lcrs(title)}>
                {title} {year ? `(${year})` : null}
              </Link>
            ) : (
              <>
                {title} {year ? `(${year})` : null}
              </>
            )}
          </h3>
          {label ? (
            <div className="badge badge-primary mr-2">{label}</div>
          ) : null}
          {sig ? (
            <Link
              to={"/sigs/" + lcrs(sig.name)}
              className="badge badge-info text-uppercase"
            >
              {sig.name}
            </Link>
          ) : null}
          <div className="info">
            <span className="text-muted">
              By
              {RenderAuthors(authors, "")}
            </span>
          </div>
          <p> {description} </p>
        </div>
      </div>
    </div>
  )
}

const Author = ({ data, location, uri }) => {
  const { member_details, member_projects, member_articles } = data

  return (
    <Layout location={location.pathname}>
      <SearchEngineOps title={"About " + member_details.name} />
      <main className="page blog-post-list">
        <section className="clean-block clean-blog-list dark">
          <div className="container-fluid">
            <div className="block-content">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="text-center mt-4">
                        <div class="text-center">
                          {member_details.image ? (
                            <img
                              src={`https://drive.google.com/thumbnail?id=${new URL(
                                member_details.image
                              ).searchParams.get("id")}`}
                              class="img-fluid rounded  mb-5"
                              alt={member_details.name}
                            />
                          ) : null}
                        </div>
                        <h5 className="text-primary">{member_details.name}</h5>
                        <h6>{member_details.position}</h6>
                        <p>
                          {member_details.social &&
                          member_details.social.email ? (
                            <OverlayTrigger
                              placement="bottom"
                              delay={{ show: 250, hide: 400 }}
                              overlay={props => (
                                <Tooltip {...props}>
                                  {member_details.social.email
                                    .replace("@", " [at] ")
                                    .split(".")
                                    .join(" [dot] ")}
                                </Tooltip>
                              )}
                            >
                              <i className="fa fa-envelope text-primary" />
                            </OverlayTrigger>
                          ) : null}
                          {member_details.social &&
                          member_details.social.facebook ? (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              className="mr-1 ml-1"
                              href={`https://www.facebook.com/${member_details.social.facebook}`}
                            >
                              &nbsp;
                              <i className="fa fa-facebook" />
                            </a>
                          ) : null}
                          {member_details.social &&
                          member_details.social.linkedin ? (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              className="mr-1 ml-1"
                              href={`https://www.linkedin.com/in/${member_details.social.linkedin}`}
                            >
                              &nbsp;
                              <i className="fa fa-linkedin" />
                            </a>
                          ) : null}
                          {member_details.social &&
                          member_details.social.github ? (
                            <a
                              target="_blank"
                              rel="noreferrer"
                              className="mr-1 ml-1"
                              href={`https://www.github.com/${member_details.social.github}`}
                            >
                              &nbsp;
                              <i className="fa fa-github" />
                            </a>
                          ) : null}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12">
                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Projects</h4>
                      </div>
                      {member_projects.nodes.map((e, i) => (
                        <RenderProject {...e} />
                      ))}
                    </div>
                  </div>
                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Blog Articles</h4>
                      </div>
                      {member_articles.nodes.map((e, i) => (
                        <RenderArticles element={e} index={i} />
                      ))}
                    </div>
                  </div>

                  <div
                    className="card clean-blog-post mb-3"
                    style={{ paddingBottom: "10px" }}
                  >
                    <div className="card-body">
                      <div className="card-title">
                        <h4>Project Reports</h4>
                      </div>
                      {/* {member_reports.nodes.map((e, i) => (
                        <RenderArticles element={e} index={i} />
                      ))} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Glimpse currentRoute={uri} />
    </Layout>
  )
}

export const postQuery = graphql`
  query ($pathSlug: String) {
    member_details: strapiMembers(name: { in: [$pathSlug] }) {
      name
      position
      image
      passoutYr
      contacts {
        email
        facebook
        github
        linkedin
      }
    }
    member_projects: allStrapiProjects(
      filter: { authors: { elemMatch: { name: { in: [$pathSlug] } } } }
    ) {
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
    member_articles: allStrapiBlogs(
      sort: { fields: date, order: DESC }
      filter: { authors: { elemMatch: { name: { in: [$pathSlug] } } } }
    ) {
      nodes {
        title
        authors {
          name
        }
        excerpt
        date(formatString: "MMMM Do, YYYY")
        route
      }
    }
  }
`
export default Author
